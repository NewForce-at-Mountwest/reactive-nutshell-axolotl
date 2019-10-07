const remoteURL = "http://localhost:1234";
// Task Manager
export default {
  getOne(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/tasks`).then(result => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "DELETE",
    }).then(data => data.json());
  },

  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(data => data.json());
  },
  update(editedTask) {
    return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTask)
    }).then(data => data.json());
  }
};
