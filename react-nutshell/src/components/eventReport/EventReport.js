import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import {line, bar, Line} from "react-chartjs-2"

// build component to create report
class EventReportBuild extends Component {
  // set the object keys in state
  state = {
    events: [],

  };
// build chart to track attendance

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

  return (
    // call function to build the chart
    <>
    <h2>Event Statistics</h2>
    <div>
      <Line
      options= {{responsive: true}}
      data={}
/>
    </div>
    </>
  )
}
}
export default EventReportBuild