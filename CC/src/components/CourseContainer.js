import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {

  state={
    courses:[],
    selectedCourse:[],
    filteredStudents:[],
    attend: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/courses')
    .then(res=>res.json())
    .then(courses=> this.setState({courses}))
  }
  
  populateStudents=(course)=>{
    if (course)  {
      fetch('http://localhost:6001/students')
      .then(res=>res.json())
      .then(students=> {
        
        const courseStudents= students.filter(student=> student.course===course.name)
        this.setState({filteredStudents:courseStudents})
      })
    }  
    
  }

  handleChange=(courseId)=>{
    const coolCourse=[...this.state.courses].find(course => course.id===parseInt(courseId))
    this.setState({ selectedCourse: coolCourse })
    this.populateStudents(coolCourse)
  }

  handleAttending=(student)=>{
    
    // const attending=[...this.state.filteredStudents].map(std=>{
    //   return std.id===student.id? !student.attending: std.attending})
    //this.setState({filteredStudents})
    
   console.log(student)
    //this.setState({})
  }

  render() {
   //console.log(this.state.filteredStudents)
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.selectedCourse}/>
        <CourseSelector courses={this.state.courses} handleChange={this.handleChange}/>
        <StudentsList students={this.state.filteredStudents} handleAttending={this.handleAttending}/>
      </div>
    );
  }
}

export default CourseContainer;
