import React, { Component } from "react";
import EventManager from "../../modules/EventManager";
import { Button } from "react-bootstrap";

class EventEditForm extends Component {
  // set initial state
  state = {
    event: "",
    date: "",
    location: ""
  };
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
  //   method to update existing event
  updateExistingEvent = evt => {
    evt.preventDefault();
    this.setState({ loadingstatus: true });
    // build edited event object
    const editedEvent = {
      id: this.props.match.params.eventId,
      event: this.state.event,
      date: this.state.date,
      location: this.state.location
    };
    // re direct to events list page
    EventManager.update(editedEvent).then(() =>
      this.props.history.push("/events")
    );
  };

  componentDidMount() {
    // get  event from json server to edit
    console.log("component did mount -edit");
    EventManager.get(this.props.match.params.eventId).then(oneEvent => {
      console.log(oneEvent);
      this.setState({
        event: oneEvent.event,
        date: oneEvent.date,
        location: oneEvent.location,
        loadingstatus: false
      });
    });
  }
  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="event"
                value={this.state.event}
              />
              <label htmlFor="event">Event</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="location"
                value={this.state.location}
              />
              <label htmlFor="location">Location</label>
            </div>
          </fieldset>
          <Button
            variant="light"
            disabled={this.state.loadingStatus}
            onClick={this.updateExistingEvent}
          >
            Submit
          </Button>
        </form>
      </>
    );
  }
}
export default EventEditForm;
