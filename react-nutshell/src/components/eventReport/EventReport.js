import React, { Component } from "react";
import EventManager from "../../modules/EventManager";

// build component to create report
class ReportEventBuild extends Component {
  // set the object keys in state
  state = {
    event: "",
    date: "",
    location: "",
    estimateAttendance: "",
    actualAttendance: "",
    eventCost: "",
    eventProceeds: "",
    loadingStatus: false
  };
}
export default ReportEventBuild