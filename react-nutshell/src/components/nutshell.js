import React, {Component} from "react"
import NavBar from "./navbar/NavBar.js"
// import 'bootstrap/dist/css/bootstrap.min.css';
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