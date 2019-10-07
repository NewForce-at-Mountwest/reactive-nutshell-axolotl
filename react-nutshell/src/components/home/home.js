import React, { Component } from 'react'
class Home extends Component {
  //logout function to remove userId from database
  handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("userId")
    //redirects to login page
    this.props.history.push("/login")};
    //Form Print Render function
  render() {
    return (
      <>
      <h1>Click the tabs to view your personal news, tasks and events! </h1>
      
      <img src="maxresdefault.jpg" alt="nutshell"/>

    <button type="submit" onClick={this.handleLogOut}>Logout</button></>
    )
  }
}

export default Home