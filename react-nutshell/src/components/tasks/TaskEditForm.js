import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";


class TaskEditForm extends Component {
  //set the initial state
  state = {
    id: "",
    name: "",
    completion: "",
    userId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingTask = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedTask = {
      id: this.props.match.params.taskId,
      name: this.state.name,
      completion: this.state.completion,
      userId: localStorage.getItem('userId')
    };
console.log(this.state.name)
    TaskManager.update(editedTask).then(() =>
      this.props.history.push("/tasks")
    );
  };

  componentDidMount() {
    TaskManager.getOne(this.props.match.params.taskId).then(tasks => {
      this.setState({
        name: tasks.name,
        completion: tasks.completion,
        loadingStatus: false,

      })
      console.log(tasks)
    })

  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="Task">Task</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />

              <label htmlFor="completion">Completion Date</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="completion"
                value={this.state.completion}
              />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >
                Submit Edit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default TaskEditForm;