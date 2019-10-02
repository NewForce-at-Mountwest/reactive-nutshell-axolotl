const remoteURL = "http://localhost:1234"

export default {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
  }
}