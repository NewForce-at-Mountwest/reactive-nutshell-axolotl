import React, {Component} from "react"
import NavBar from "./navbar/NavBar"
import ApplicationViews from "./ApplicationViews"
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