import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavItem, Form, FormControl} from "react-bootstrap";

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
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="home">Nutshell</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="news">News</Nav.Link>
      <Nav.Link href="tasks">Tasks</Nav.Link>
      <Nav.Link href="events">Events</Nav.Link>
      <Nav.Link href="chat">Chat</Nav.Link>
         </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form> */}
  </Navbar.Collapse>
</Navbar>
        </header>
      );
    }
  }

  export default withRouter(NavBar);