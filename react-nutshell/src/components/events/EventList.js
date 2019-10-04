import React, { Component } from "react";
//import the components we will need
import EventCard from "./EventCard";
import EventManager from "../../modules/EventManager";
import { Button } from "react-bootstrap";
import "./Events.css";

class EventList extends Component {
  //define what this component needs to render
  // set the array of events in state
  state = {
    events: []
  };
  // method to delete one event
  deleteEvent = id => {
    EventManager.delete(id).then(() => {
      EventManager.getAll().then(events => {
        this.setState({
          events: events
        });
      });
    });
  };

  componentDidMount() {
    console.log("EVENT LIST: ComponentDidMount");
    //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
    EventManager.getAll().then(events => {
      this.setState({
        events: events
      });
    });
  }
  // render the events and return the keys to be used in the event card
  render() {
    console.log("EventList: Render");

    return (
      <>
        <section className="section-content">
          {/* create button to create a new event on click of submit button */}
          <Button
            id="new-event"
            variant="light"
            size="lg"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            New Event
          </Button>
        </section>
        <div className="container-cards">
          {this.state.events.map((event, index) => (
            <EventCard
              key={event.id}
              className = {if(${index})=== 0{className= "first-event"} {
                className= "container-cards"}
              }
              event={event}
              deleteEvent={this.deleteEvent}
              {...this.props}
            />
          ))}
        </div>
      </>
    );
  }
}

export default EventList;
