import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Login from './auth/Login'
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import Register from "./auth/Register"
class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("userId") || sessionStorage.getItem("userId")!== null
    render() {
      return (
        <React.Fragment>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
          <Route exact path="/" render={(props) => {
         if (this.isAuthenticated()){
          return <Home />
        }else{
          return <Redirect to="/login" />
        }
        }} />


        <Route
          exact path="/events"
          render={props => {
            if (this.isAuthenticated()){
            return <EventList {...props} />;
          }
        else{
          return <Redirect to= "/login"/>
        }}}
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
