const remoteURL = "http://localhost:1234"
export default {
    createAccount(){
        return fetch(`${remoteURL}/users?username=${userName}`).then(result=>result.json())
        .then(parsedResponse => {
            if (parsedResponse.length === 0) {
                fetch(`${remoteURL}/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(accountToCreate)
                })
                    .then(response => response.json())
                    .then(parsedUser => {
                        localStorage.setItem("userId", parsedUser.id);
                    });
            } else {
                alert("Oh no! That user name already exists!");
            }
        })
    },
    postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())},
}