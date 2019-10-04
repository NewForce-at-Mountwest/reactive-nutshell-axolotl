import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";


class TaskEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    completion: "",
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
      active: true
    };

    TaskManager.update(editedTask).then(() =>
      this.props.history.push("/tasks")
    );
  };

  componentDidMount() {
    TaskManager.getOne(this.props.match.params.taskId).then(tasks => {
        this.setState({
          name: tasks.task,
          completion: tasks.completion,
          loadingStatus: false,
        })})};

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="taskName">Task</label>
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

              {/* <select
                className="form-control"
                id="taskId"
                value={this.state.taskId}
                onChange={this.handleFieldChange}
              >
                {this.state.tasks.map(tasks => (
                  <option key={tasks.id} value={tasks.id}>
                    {tasks.name}
                  </option>
                ))}
              </select> */}
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