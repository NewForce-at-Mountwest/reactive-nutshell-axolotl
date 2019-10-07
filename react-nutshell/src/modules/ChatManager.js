const remoteURL = "http://localhost:1234";
// Chat Manager
export default {
  getOne(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/messages?_expand=user`).then(result => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/messages/${id}`, {
      method: "DELETE",
    }).then(data => data.json());
  },

  post(newChat) {
    return fetch(`${remoteURL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newChat)
    }).then(data => data.json());
  },
  update(editedChat) {
    return fetch(`${remoteURL}/messages/${editedChat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedChat)
    }).then(data => data.json());
  }
};
