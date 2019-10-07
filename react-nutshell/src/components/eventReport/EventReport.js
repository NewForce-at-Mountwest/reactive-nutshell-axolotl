import React, { Component } from "react";
import EventManager from "../../modules/EventManager";

// build component to create report
class ReportEventBuild extends Component {
  // set the object keys in state
  state = {
    event: "",
    date: "",
    location: "",
    estimateAttendance: "",
    actualAttendance: "",
    eventCost: "",
    eventProceeds: "",
    loadingStatus: false
  };
}
componentDidMount() {
  console.log("EVENT REPORT: ComponentDidMount");
  //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
  EventManager.getAll().then(events => {
    this.setState({
      events: events
    });
  });
}

// render the chart
render () {

  return ()
}

export default ReportEventBuild