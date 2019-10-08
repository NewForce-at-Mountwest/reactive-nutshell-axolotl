import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import EventManager from "../../modules/EventManager";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: {
        labels: [],
        datasets: [
          {
            label: "Profits",
            data: [],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(200, 80,75,0.6",
              "rgba(80, 120,40, 0.6)",
              "rgba(100, 20, 30, 0.5)",
              "rgba(250, 100, 150, 0.6)"
            ]
          }
        ]
      }
    };
  }

  componentDidMount() {
    console.log("Graph: ComponentDidMount");
    //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
    EventManager.getAll().then(events => {
      // map over events and create new object of event names and gross profits
      const labelArray = events.map(singleEvent => {
        return `${singleEvent.event}`;
      });
      const profitArray = events.map(singleEvent => {
        return +singleEvent.proceeds - +singleEvent.cost;
      });
      this.setState({
        graphData: {
          labels: labelArray,
          datasets: [
            {
              label: "Profits",
              data: profitArray
            }
          ],
          backgroundColor: ["rgba(255, 99, 132, 0.6)"]
        }
      });
    });
  }
  render() {
    return (
      <div>
        <Bar
          data={this.state.graphData}
          options={{
            title: {
              display: true,
              text: "Profits by Event",
              fontSize: 20
            }
          }}
        />
      </div>
    );
  }
}
export default Graph;
