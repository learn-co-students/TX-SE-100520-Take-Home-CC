import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        <CourseDetails />
        <CourseSelector />
        <StudentsList />
      </div>
    );
  }
}

export default CourseContainer;
