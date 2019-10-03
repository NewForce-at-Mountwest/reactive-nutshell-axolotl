import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Login from './auth/Login'
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") || sessionStorage.getItem("credentials")!== null
    render() {
      return (
        <React.Fragment>
          <Route exact path="/" render={(props) => {
         if (this.isAuthenticated()){
          return <Home />
        }else{
          return <Redirect to="/login" />
        }
        }} />
      <Route path="/login" component={Login} />
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
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    );
  }
}
export default ApplicationViews
