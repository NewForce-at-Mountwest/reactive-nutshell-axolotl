import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";


class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
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
        <Route
          path="/events/:eventId(\d+)/edit"
          render={props => {
            return <EventEditForm {...props} />;
          }}
        />
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
