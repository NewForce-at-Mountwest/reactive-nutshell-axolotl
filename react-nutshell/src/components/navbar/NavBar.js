import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
    // method to change link color upon active link
    changeLinkColor = pathname => {
      if (pathname === this.props.location.pathname) {
        return "nav-link enabled";
      } else {
        return "nav-link";
      }
    };

    render() {

      return (
        <header>
          <h1 className="site-title">
           Welcome to Nutshell
            <br />
            <small>Bringing Your Life Together</small>
          </h1>
          <nav>
            <ul className="container">
              <li>
                <Link className={this.changeLinkColor("/")} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={this.changeLinkColor("/tasks")} to="/tasks">
                  Tasks
                </Link>
              </li>
              <li>
                <Link className={this.changeLinkColor("/news")} to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className={this.changeLinkColor("/events")} to="/events">
                  Events
                </Link>
              </li>
              <li>
                <Link className={this.changeLinkColor("/chats")} to="/chat">
                  Chats
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
  }

  export default withRouter(NavBar);
