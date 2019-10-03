import { Route } from "react-router-dom";
// Redirect
import React, { Component } from "react";
import Home from "./home/Home";
import Login from './auth/Login'
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import Register from "./auth/Register"
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
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
          // render={props => {
          //   return this.isAuthenticated() ? (
          //     <NewsForm {...props} />
          //   ) : (
          //     <Redirect to="/login" />
          //   );
          // }}
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
        {/* <Route path="/login" component={Login} /> */}
      </React.Fragment>
    );
  }
}
export default ApplicationViews
