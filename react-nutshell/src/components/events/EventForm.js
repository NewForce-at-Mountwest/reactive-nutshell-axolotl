import React, { Component } from "react";
import EventManager from "../../modules/EventManager";

class EventForm extends Component {
  // set the object keys in state
  state = {
    event: "",
    date: "",
    location: "",
    actual: 0,
    estimate: 0,
    cost:0,
    proceeds: 0,
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
        location: this.state.location,
        actual: this.state.actual,
        estimate: this.state.estimate,
        cost: this.state.cost,
        proceeds: this.state.proceeds
      };

      // Create the event and redirect user to event list
    EventManager.post(event).then(() => this.props.history.push("/events"))
    }
  }

  render() {
    return (
      // return form to add an a new event
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
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="location"
                placeholder="Event Location"
              />
              <label htmlFor="location">Event Location</label>
              <input
                type="number"
                required
                onChange={this.handleFieldChange}
                id="actual"
                placeholder="Actual Attendance"
              />
              <label htmlFor="actual">Actual Attendance</label>
              <input
                type="number"
                required
                onChange={this.handleFieldChange}
                id="actual"
                placeholder="Estimate Attendance"
              />
              <label htmlFor="estimate">Estimate Attendance</label>
              <input
                type="number"
                required
                onChange={this.handleFieldChange}
                id="cost"
                placeholder="Event Cost"
              />
              <label htmlFor="cost">Event Cost</label>
              <input
                type="number"
                required
                onChange={this.handleFieldChange}
                id="proceeds"
                placeholder="Event Proceeds"
              />
              <label htmlFor="proceeds">Event Proceeds</label>
            </div>
            <div className="alignRight">
              {/* button to submit new wvent and call method to add to json db */}
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
};

export default EventForm;
