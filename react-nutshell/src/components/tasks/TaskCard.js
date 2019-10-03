import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
class TaskCard extends Component {

    handleDelete = () => {

        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        TaskManager.delete(this.props.animalId)
        .then(() => this.props.history.push("/animals"))
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
              <button>Complete</button>
            </div>
          </div>
        );
      }
    }

export default TaskCard;
