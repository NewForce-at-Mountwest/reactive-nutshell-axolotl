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
      <h1>E.T. Phone Home</h1>

    <button type="submit" onClick={this.handleLogOut}>Logout</button></>
    )
  }
}

export default Home