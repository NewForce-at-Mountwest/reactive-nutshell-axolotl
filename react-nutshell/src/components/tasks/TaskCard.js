import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskCard extends Component {

    render() {
        return (
          <div className="card">
            <div className="card-content">

              <h3>
                Task:{" "}
                <span className="card-taskname">{this.props.taskProp.task}</span>
              </h3>
              <p>Completion Date:{this.props.taskProp.completion}</p>

              <Link to={`/tasks/${this.props.taskProp.id}/TaskList`}>
                <button>Details</button>
              </Link>
              <Link to={`/tasks/${this.props.taskProp.id}/TaskEditForm`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        );
      }
    }

export default TaskCard;
