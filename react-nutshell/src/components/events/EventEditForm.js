import React, { Component } from "react";
import EventManager from "../../modules/EventManager";

class EventEditForm extends Component {
  // set initial state
  state = {
    event: "",
    date: ""
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
      active: true
    };
    // re direct to events list page
    EventManager.update(editedEvent).then(() =>
      this.props.history.push("/events")
    );
  };

  componentDidMount() {
    // get  event from json server to edit
    EventManager.get(this.props.match.params.eventId).then(
      event => {
        this.setState({
          event: event.event,
          loadingstatus: false
        });
      }
    );
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
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Name</label>
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingPatron}
                className="btn btn-primary"
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
export default EventEditForm;
