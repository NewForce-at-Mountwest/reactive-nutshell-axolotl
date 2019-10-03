import React, { Component } from "react"
import LoginManager from '../../modules/LoginManager'
class Register extends Component {
  // Set initial state
  state = {
      username: "",
    email: "",
    password: ""
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
  };
  constructNewUser = evt => {
    evt.preventDefault();
      this.setState({ loadingStatus: true })
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
      LoginManager.postNewUser(user);
    this.props.history.push("/")}

  render() {
    return (
      <form >
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
            <button type="submit" onClick={this.constructNewUser}>
                Register
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Register