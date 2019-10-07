import React, { Component } from "react";

class EventReportCard extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <h4>
            Event Name:{" "}
            <span className="card-event">{this.props.event.event}</span>
          </h4>
          <p>Attendance Variance: {+this.props.event.actual - +this.props.event.estimate}</p>
          <p>Event Profit: {+this.props.event.proceeds- +this.props.event.cost}</p>
                 </div>
      </div>

    );
  }
}

export default EventReportCard;
