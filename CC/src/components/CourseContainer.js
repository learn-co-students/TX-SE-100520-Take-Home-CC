import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
  state = {
    courses: [],
    selectedCourse: {},
    students: []
  }
  componentDidMount(){
    fetch('http://localhost:6001/courses')
    .then(res => res.json())
    .then(courses => this.setState({courses}))
  }
  selectedCourse = (id) => {
    const course = this.state.courses.find(course => course.id == id)
    this.setState({selectedCourse: course})
  }

  // shouldComponentUpdate(nextState){
  //   if (nextState.selectedCourse !== this.state.selectedCourse) {
  //         fetch('http://localhost:6001/students')
  //         .then(res => res.json())
  //         .then(students => this.setState({students}))
  //       }
  // }
  // componentDidUpdate(prevState){
  //   if (prevState.selectedCourse !== this.state.selectedCourse) {
  //     fetch('http://localhost:6001/students')
  //     .then(res => res.json())
  //     .then(students => this.setState({students}))
  //   }
  // }
  fetchStudentsFunc = () => {
    fetch('http://localhost:6001/students')
      .then(res => res.json())
      .then(students => this.filterStudentsFunc(students))
  }
  filterStudentsFunc = (students) => {
    const selectedStudents = students.filter(student => student.course === this.state.selectedCourse.name)
    this.setState({
      students: selectedStudents
    })
  }
  handleClick = (student) => {
    if (student.attending === true){
      student.attending = false
    }else{
      student.attending = true
    }
    fetch(`http://localhost:6001/students/${student.id}`,{
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(student)
    })
    console.log(student.attending)
  }
  

  render() {
    console.log(this.state.selectedCourse)
    console.log(this.state.students)
    
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.selectedCourse} />
        <CourseSelector courses={this.state.courses} selectedCourse={this.selectedCourse} fetchStudents={this.fetchStudentsFunc}/>
        <StudentsList students={this.state.students} handleClick = {this.handleClick} />
      </div>
    );
  }
}

export default CourseContainer;
