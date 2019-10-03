import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/home";
import Login from './auth/Login'
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

      </React.Fragment>
    );
  }
}
export default ApplicationViews;
