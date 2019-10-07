import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/home";
import TaskList from "./tasks/TaskList";
import TaskCard from "./tasks/TaskCard";
import TaskForm from "./tasks/TaskForm";
import TaskEditForm from "./tasks/TaskEditForm";
import Login from './auth/Login'
import EventList from "./events/EventList";
import EventForm from "./events/EventForm";
import EventEditForm from "./events/EventEditForm";
import ChatList from './chat/ChatList'
import Login from './auth/Login'
import Register from "./auth/Register"
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import NewsEditForm from "./news/NewsEditForm";
class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("userId") !== null;
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

          {/* Login Route */}
            <Route exact path="/login" component={Login} />

            {/* Register Route*/}
            <Route exact path="/register"component={Register}/>

            {/*Home Route*/}
          <Route exact path="/home" render={(props) => {
         if (this.isAuthenticated()){
          return <Home {...props} taskId={parseInt(props.match.params.taskId)}/>
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
            if (this.isAuthenticated()){
            return <EventList {...props} />;
          }
        else{
          return <Redirect to= "/login"/>
        }}}
        />
          <Route
          exact
          path="/chat"
          render={props => {
            if (this.isAuthenticated()){
            return <ChatList {...props} />;
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
