import React, { Component } from "react";
import EventManager from "../../modules/EventManager";

class EventForm extends Component {
  state = {
    event: "",
    date: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create event object, invoke the EventManager post method, and redirect to the full event list
   */
  constructNewEvent = evt => {
    evt.preventDefault();
    if (this.state.event === "" || this.state.date === "") {
      window.alert("Please input an event name and date");
    } else {
      this.setState({ loadingStatus: true });
      const event = {
        event: this.state.event,
        date: this.state.date,
      };

      // Create the event and redirect user to event list
    EventManager.post(event).then(() => this.props.history.push("/events"));
    }
  };

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
                placeholder="Event Name"
              />
              <label htmlFor="event">Event Name</label>
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date"
              />
              <label htmlFor="date">Event Date</label>
            </div>
            <div className="alignRight">
              <button
                id="new-event-btn"
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEvent}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EventForm;
