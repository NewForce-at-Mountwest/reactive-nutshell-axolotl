const remoteURL = "http://localhost:1234"

export default {
  // get one event from the json db
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
  },
  // get all the events in ascending date order from json
  getAll() {
    return fetch(`${remoteURL}/events?_sort=date&_order=asc`).then(result => result.json())
  },
  // post a new event to json db
  post(newEvent) {
    return fetch(`${remoteURL}/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(data => data.json())
},
// return updated event to json db
update(editedEvent)  {
  return fetch(`${remoteURL}/events/${editedEvent.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedEvent)
  }).then(data => data.json());
},
// delete one single event from the json db
delete(id) {
  return fetch(`${remoteURL}/events/${id}`, {
    method: "DELETE"})
    .then(result => result.json())
  }
}