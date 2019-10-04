import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Events.css"

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className={this.props.indexProp === 0 ? "first-event" : "card-content"}>
          <h4>
            Event Name:{" "}
            <span className="card-event">{this.props.event.event}</span>
          </h4>
          <p>Date: {this.props.event.date}</p>
          <p>Location: {this.props.event.location}</p>
          {/* button to render the event edit form  */}
          <Button
            variant="light"
            id="edit-btn"
            onClick={() => {
              this.props.history.push(`/events/${this.props.event.id}/edit`);
            }}
          >
            Edit Event
          </Button>
          {/* create button to delete event */}
          <Button
            variant="light"
            id="delete-btn"
            onClick= {()=>this.props.deleteEvent(this.props.event.id)}
          >
            Delete Event
          </Button>
        </div>
      </div>
    );
  }
}

export default EventCard;
