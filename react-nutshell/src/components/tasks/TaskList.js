import React, { Component } from "react";
//import the components we will need
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";

class TaskList extends Component {
  //define what this component needs to render
  state = {
    tasks: []
  };
// delete function

  handleDelete = (id) => {
    this.setState({loadingStatus: true})
    TaskManager.delete(id)
    .then(TaskManager.getAll)
    .then(returnedTask => {
      this.setState({
        tasks: returnedTask
      })
    })
  }

// get all tasks from the database
  componentDidMount() {
    console.log("TASK LIST: ComponentDidMount");
    TaskManager.getAll().then(tasksFromDatabase => {
      console.log(tasksFromDatabase);
      this.setState({
        tasks: tasksFromDatabase
      });
    });
  }
// Add task form
  render() {
    console.log("TASK LIST: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/tasks/TaskForm");
            }}
 >ADD TASK
          </button>
        </section>
        <div className="container-cards">
          {this.state.tasks.map(singleTask => (
            <TaskCard key={singleTask.id} taskProp={singleTask} handleDelete={this.handleDelete} />
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;