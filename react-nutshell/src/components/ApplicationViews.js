import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import TaskList from "./tasks/TaskList";
import TaskCard from "./tasks/TaskCard";
import TaskForm from "./tasks/TaskForm";
import TaskEditForm from "./tasks/TaskEditForm";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";


class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/tasks/TaskCard"
          render={props => {
            return <TaskCard {...props}
            taskId={parseInt(props.match.params.taskId)}
              />
          }}
        />
        <Route
          exact
          path="/tasks/TaskEditForm"
          render={props => {
            return <TaskEditForm {...props}
            taskId={parseInt(props.match.params.taskId)}
              />
          }}
        />
        <Route
          exact
          path="/tasks/TaskForm"
          render={props => {
            return <TaskForm {...props}
            taskId={parseInt(props.match.params.taskId)}
              />
          }}
        />
        <Route
          exact
          path="/tasks/TaskList"
          render={props => {
            return <TaskList {...props}
            taskId={parseInt(props.match.params.taskId)}/>
          }}
              />

              <Route
          exact path="/events"
          render={props => {
            return <EventList {...props} />;
          }}
        />
        <Route
          path="/events/new"
          render={props => {
            return <EventForm {...props} />;
          }}
        />
         {/* { <Route path="/login" component={Login} /> } */}

      </React.Fragment>
    );
  }
}
export default ApplicationViews;
