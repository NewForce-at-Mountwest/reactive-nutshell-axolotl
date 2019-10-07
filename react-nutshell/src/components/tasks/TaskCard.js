
import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskCard extends Component {

    state = {
      id: "",
      name: "",
      completion: "",
    }

    // render edit and complete buttons

    render() {
        return (
          <div className="card">
            <div className="card-content">

              <h3>
                Task:{" "}
                <span className="card-taskname">{this.props.taskProp.name}</span>
              </h3>
              <p>Completion Date:{this.props.taskProp.completion}</p>
              <Link to={`/tasks/${this.props.taskProp.id}/edit`}>
                <button>EDIT</button>
              </Link>
              <br></br>
              <label>

          COMPLETED:
          <input
            name="isComplete"
            type="checkbox"
            // checked={this.props.completion}
            onChange={() => this.props.handleDelete(this.props.taskProp.id)} />
        </label>
              </div>

                      </div>
      );
    }

}


export default TaskCard;
