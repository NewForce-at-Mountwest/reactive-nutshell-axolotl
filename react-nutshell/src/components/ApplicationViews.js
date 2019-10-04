import { Route } from "react-router-dom";
// Redirect
import React, { Component } from "react";
import Home from "./home/home";
import TaskList from "./tasks/TaskList";
import TaskCard from "./tasks/TaskCard";
import TaskForm from "./tasks/TaskForm";
import TaskEditForm from "./tasks/TaskEditForm";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
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
          path="/home"
          render={props => {
            return <Home {...props}
            taskId={parseInt(props.match.params.taskId)}/>
          }}
              />
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
          path="/tasks/:taskId(\d+)/edit"
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
        {/* <Route path="/login" component={Login} /> */}

        {/* News Routes */}
        <Route
          exact
          path="/news"
          render={props => {
            return <NewsList {...props} />;
          }}
          // render={props => {
          //   if (this.isAuthenticated()) {
          //     return <NewsList {...props} />;
          //   } else {
          //     return <Redirect to="/login" />;
          //   }
          // }}
        />
        <Route
          exact
          path="/news/new"
          render={props => {
            return <NewsForm {...props} />;
          }}
          // render={props => {
          //   return this.isAuthenticated() ? (
          //     <NewsForm {...props} />
          //   ) : (
          //     <Redirect to="/login" />
          //   );
          // }}
        />
        <Route
          exact
          path="/tasks"
          render={props => {
            return <TaskList {...props}
            taskId={parseInt(props.match.params.taskId)}/>
          }}
              />

              <Route
          exact path="/news/:newsId(\d+)/edit"
          render={props => {
            return <NewsEditForm {...props} />;
          }}
        />
        <Route
          exact
          path="/events"
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
