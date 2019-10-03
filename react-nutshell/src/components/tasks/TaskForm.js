import React, { Component } from "react";
import TaskManager from "../../modules/TaskManager";
// import './AnimalForm.css'

class TaskForm extends Component {
  state = {
    taskName: "",
    completion: "",
    loadingStatus: false,
    taskId: ""
  };

  handleFieldChange = evt => {
    console.log("this is event.target.id", evt.target.id);
    console.log("this is event.target.value", evt.target.value);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    console.log("this is state to change", stateToChange);
    this.setState(stateToChange);
  };

  componentDidMount(){
      // Get all employees from db
    TaskManager.getAll().then(parsedTasks => {
        console.log(parsedTasks)
        // Take employees from db and set them to state
        this.setState({tasks: parsedTasks})
    })
  }

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  constructNewTask = evt => {
    evt.preventDefault();
    if (this.state.task === "" || this.state.completion === "") {
      window.alert("Please input task name and completion date");
    } else {
      this.setState({ loadingStatus: true });
      const task = {
        task: this.state.task,
        completion: this.state.completion,
        Id: +this.state.taskId // convert to number
      };

      // Create the animal and redirect user to animal list
      TaskManager.post(task).then(() =>
        this.props.history.push("/tasks")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="task"
                placeholder="Task to complete"
              />

              <label htmlFor="completion">Completion</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="completion"
                placeholder="Completion Date"
              />
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewTask}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default TaskForm;