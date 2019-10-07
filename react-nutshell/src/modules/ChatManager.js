const remoteURL = "http://localhost:1234"

export default {
  // get one event from the json db
  get(id) {
    return fetch(`${remoteURL}/chats/${id}`).then(result => result.json())
  },
  // get all the chats
  getAll() {
    return fetch(`${remoteURL}/chats/messages`).then(result => result.json())
  },
  // post a new chat to json db
  post(newChat) {
    return fetch(`${remoteURL}/chats`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newChat)
    }).then(data => data.json())
},
// return updated chat to json db
update(editedChat)  {
  return fetch(`${remoteURL}/chats/${editedChat.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedChat)
  }).then(data => data.json());
},
// delete one single event from the json db
delete(id) {
  return fetch(`${remoteURL}/chats/${id}`, {
    method: "DELETE"})
    .then(result => result.json())
  }
}