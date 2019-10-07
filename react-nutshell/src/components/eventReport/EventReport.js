import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
// import {line, bar, Line} from "react-chartjs-2"
import EventReportCard from "../eventReport/EventReportCard"

// build component to create report
class EventReportBuild extends Component {
  // set the object keys in state
  state = {
    events: [],
    eventNames: [],
    profits: []
  };

componentDidMount() {
  console.log("EVENT REPORT: ComponentDidMount");
  //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
  EventManager.getAll().then(events => {
// map over events and create new object of event names and gross profits
const eventArray = events.map(singleEvent => {
  return {
    "event": `${singleEvent.event}`,
    "profits": `${+singleEvent.proceeds- +singleEvent.cost}`
  }
})
    this.setState({
      events: events,
      eventNames: eventArray.event,
      profits: eventArray.profits,
      data: {
        labels: [],
dataset:[
  {label: "Event Profits",
  data:[]
  }
]
      }
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
        {/* section with gross profit line graph of all events */}
        <section>
      {/* <Line
      // options= {{responsive: true}}
      // data={}
/> */}
</section>
    </div>
    </>
  )
}
}
export default EventReportBuild