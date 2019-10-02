import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";

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
        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
