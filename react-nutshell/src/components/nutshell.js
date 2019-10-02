import React, {Component} from "react"
<<<<<<< HEAD
import NavBar from "./navbar/NavBar"
import ApplicationViews from "./ApplicationViews"
=======
import NavBar from "./navbar/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationViews from "./ApplicationViews.js"
>>>>>>> master
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