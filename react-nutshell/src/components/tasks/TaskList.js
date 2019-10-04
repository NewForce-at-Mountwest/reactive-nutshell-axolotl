import React, { Component } from "react";
//import the components we will need
import TaskCard from "./TaskCard";
import TaskManager from "../../modules/TaskManager";

class TaskList extends Component {
  //define what this component needs to render
  state = {
    tasks: []
  };

  componentDidMount() {
    console.log("TASK LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    TaskManager.getAll().then(tasksFromDatabase => {
      console.log(tasksFromDatabase);
      this.setState({
        tasks: tasksFromDatabase
      });
    });
  }

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
>
            ADD TASK
          </button>
        </section>
        <div className="container-cards">
          {this.state.tasks.map(singleTask => (
            <TaskCard key={singleTask.id} taskProp={singleTask} />
          ))}
        </div>
      </>
    );
  }
}

export default TaskList;