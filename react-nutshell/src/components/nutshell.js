import React, {Component} from "react"
import NavBar from "./nav/NavBar.js"
import ApplicationViews from "./ApplicationViews.js"
// import "./nutshell.css"
class Nutshell extends Component {
 render() {
   return (
     <>
       <NavBar />
       <ApplicationViews />
     </>
   )
 }
}
export default Nutshell