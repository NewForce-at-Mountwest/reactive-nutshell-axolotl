import React, { Component } from "react"

class Login extends Component {

  // Set initial state
  state = {
      username: "",
    email: "",
    password: "",
    remember: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  //Update Checkbox
  handleInputChange = (event) => {
    const target = event.target;
    const username = target.username;

    this.setState({
      remember: value
    });
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
   this.state.remember=== true?
sessionStorage.setItem(
    "credentials",
    JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password:this.state.password,
        remember: true
    })

):
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/users");
  }
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
            <input onChange={this.handleFieldChange} type="username"
                    id="username"
                    placeholder="Username"
                    required="" autoFocus="" />
                <label htmlFor="inputUsername">Username</label>
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Register
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login