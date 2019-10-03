import { Route } from "react-router-dom";
// Redirect
import React, { Component } from "react";
import Home from "./home/Home";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
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
          path="/home"
          render={props => {
            return <Home />;
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
          path="/news/:newsId(\d+)/edit"
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
