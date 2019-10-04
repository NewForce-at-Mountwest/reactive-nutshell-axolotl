import React, { Component } from "react"
import { Link } from "react-router-dom";
import LoginManager from "../../modules/LoginManager";
class Login extends Component {

  // Set initial state
  state = {
    username: "",
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      remember: value
    });
  }

  handleLogin = (e) => {
    e.preventDefault()
    const usernameValue = this.state.username;

    LoginManager.getUserbyUsername(usernameValue).then(user=>{
      const passwordValue = this.state.password;
      if (user[0].password === passwordValue && user[0].username === usernameValue) {
       this.state.remember=== true?
       sessionStorage.setItem("userId", user[0].id):
        localStorage.setItem("userId", user[0].id);
      }
    else{
      window.alert("Wrong username or password!")
    }})

    this.props.history.push("/home")}

  

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="username"
                    id="username"
                    placeholder="username"
                    required="" autoFocus="" />
                <label htmlFor="inputusername">Username</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <div>Remember Me?<input onChange = {this.handleInputChange}type= "checkbox" id="remember"/></div>
            <button type="submit">
                Sign in
            </button>
            <Link to={`/register`}><h1>Register</h1></Link>
        </fieldset>
      </form>
    )
  }

}

export default Login