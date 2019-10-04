import { Route, Redirect } from "react-router-dom";

import React, { Component } from "react";
import Home from "./home/home";
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import Login from './auth/Login'
import Register from "./auth/Register"
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  //Authentication for Logged in User
  isAuthenticated = () => localStorage.getItem("userId") !== null
    render() {
      return (
        <React.Fragment>
          {/* Login Route */}
            <Route exact path="/login" component={Login} />

            {/* Register Route*/}
            <Route exact path="/register"component={Register}/>

            {/*Home Route*/}
          <Route exact path="/home" render={(props) => {
         if (this.isAuthenticated()){
          return <Home {...props}/>
        }else{ return <Redirect to="/login" /> } }} />

        {/* News Routes */}
        <Route
          exact
          path="/news"
          render={props => { if (this.isAuthenticated()){
          return <NewsList {...props} />}
          else{
            return <Redirect to="/login"/>}; }}/>
        <Route
          exact
          path="/news/new"
          render={props => {
            return <NewsForm {...props} />;
          }}
        />
        <Route
          path="/news/:newsId(\d+)/edit"
          render={props => {
            return <NewsEditForm {...props} />;
          }}
        />
        <Route
          exact
          path="/events"
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
export default ApplicationViews
