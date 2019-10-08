import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import EventManager from "../../modules/EventManager"

class Graph extends Component {
  state = {
      graphData: {
        labels: [],
        datasets: [
          {
            label: "Profits",
            data: []
          }
        ]
      }
    };


  componentDidMount() {
    console.log("Graph: ComponentDidMount");
    //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
    EventManager.getAll().then(events => {
      // map over events and create new object of event names and gross profits
     const eventInfo= events.map(singleEvent => {
        return {
          labels: `${singleEvent.event}`,
          profits: `${+singleEvent.proceeds - +singleEvent.cost}`
        };
      });
      this.setState({
          labels:labels,
          data: profits
      });
    });
  }
  render() {
    return (
      <div>
        <Bar
          data={this.state.graphData}
          options={{
            title:{
                display: true,
                text: 'Profits by Event',
                fontSize:20
            }
          }}
        />
      </div>
    );
  }
}
export default Graph;
