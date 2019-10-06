// import React, { Component } from 'react';
// import TaskManager from '../../modules/TaskManager';

// class TaskCard extends Component {

//     state = {
//       id: "",
//         name: "",
//         completion: "",
//        userId: ""
//     }

//     componentDidMount(){
//         console.log("taskCard: ComponentDidMount");

//         TaskManager.getOne(this.props.taskId)
//         .then((tasks) => {
//             this.setState({
//               id: "",
//                 name: tasks.name,
//                 completion: tasks.completion,
//                 userId: ""

//             });
//         });
//     }
//     render() {
//       return (
//         <div className="card">
//           <div className="card-content">
//             <h3>Name: {this.state.name}</h3>
//             <p>Completion: {this.state.completion}</p>
//             <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Kill?</button>
//           </div>
//         </div>
//       );
//     }
//     handleDelete = () => {
//       this.setState({loadingStatus: true})
//       TaskManager.delete(this.props.taskId)
//       .then(() => this.props.history.push("/tasks"))
//   }
// }

// export default TaskCard;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
class TaskCard extends Component {

    state = {
      id: "",
      name: "",
      completion: "",
      userId: ""
    }

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
            checked={this.props.completion}
            onChange={this.handleDelete} />
        </label>
              </div>

                      </div>
      );
    }
    handleDelete = () => {
      this.setState({loadingStatus: true})
      TaskManager.delete(this.props.taskProp.id)
      .then(() => this.props.history.push("/tasks"))
      // console.log(this.props.history)
  }
}


export default TaskCard;
