import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
class TaskCard extends Component {
    state = {
        name: "",
        completion: "",
        loadingStatus: true,
    }
    handleDelete = () => {
        //invoke the delete function in TaskManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        TaskManager.delete(this.props.taskId)
        .then(() => this.props.history.push("/tasks"))
    }

    render() {
        return (
          <div className="card">
            <div className="card-content">

              <h3>
                Task:{" "}
                <span className="card-taskname">{this.props.taskProp.task}</span>
              </h3>
              <p>Completion Date:{this.props.taskProp.completion}</p>
              <Link to={`/tasks/${this.props.taskProp.id}/TaskEditForm`}>
                <button>Edit</button>
              </Link>
              <button type="button"onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        );
      }
    }

export default TaskCard;
