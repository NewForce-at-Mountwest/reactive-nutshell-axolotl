const remoteURL = "http://localhost:1234"
export default {
    postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    getUserbyUsername(username){
        return fetch(`${remoteURL}/users?username=${username}`).then(response =>
            response.json())
    }
}