import React, { Component } from 'react'
    //import the components we will need
    import EventCard from './EventCard'
    import EventManager from '../../modules/EventManager'

    class EventList extends Component {
        //define what this component needs to render
        state = {
            events: [],
        }

    componentDidMount(){
        console.log("EVENT LIST: ComponentDidMount");
        //call getAll from EventManager to bring back all events for a user and hang on to that data; put it in state
        EventManager.getAll()
        .then((events) => {
            this.setState({
                events: events
            })
        })
    }
// render the events and return the keys to be used in the event card
    render(){
        console.log("EventList: Render");

        return(
          <>
        <section className="section-content">
            {/* create button to create a new event on click of submit button */}
          <button
          id="new-event-btn"
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/events/new");
            }}
          >
            New Event
          </button>
        </section>
          <div className="container-cards">
            {this.state.events.map(event =>
              <EventCard key={event.id} event={event} {...this.props}/>
            )}
          </div></>
        )
      }
}

export default EventList