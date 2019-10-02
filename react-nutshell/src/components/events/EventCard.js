import React, { Component } from 'react';

class EventCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Event Name: <span className="card-event">{this.props.event.name}</span></h3>
          <p>Date: {this.props.event.date}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;