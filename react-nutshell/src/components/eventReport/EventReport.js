import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import EventReportCard from "../eventReport/EventReportCard"

// build component to create report
class EventReportBuild extends Component {
  // set the object keys in state
  state = {
    events: [],
  };

componentDidMount() {
  console.log("EVENT REPORT: ComponentDidMount");
  //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
  EventManager.getAll().then(events => {
// map over events and create new object of event names and gross profits
events.map(singleEvent => {
  return {
    "event": `${singleEvent.event}`,
  }
})
    this.setState({
      events: events,
    })
  });
}
// render the statistics by event on the event report cards and a gross profit graph
// by event name
render () {
  return (
    <>
    <h2>Event Statistics</h2>
    <div>
    <div className="container-cards">
          {this.state.events.map((event) => (
            <EventReportCard
              key={event.id}
              event={event}
              {...this.props}
            />
          ))}
        </div>
    </div>
    </>
  )
}
}
export default EventReportBuild