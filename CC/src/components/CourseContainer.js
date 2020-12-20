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

  handleAttending=(attendingStudent)=>{
    attendingStudent.attending=!attendingStudent.attending
    const attending=[...this.state.filteredStudents].map(student=>{
       return student.id===attendingStudent.id? attendingStudent: student})
    this.setState({filteredStudents : attending})
    

    fetch(`http://localhost:6001/students/${attendingStudent.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
        attending: attendingStudent.attending
      }),
		})

  }

  render() {

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
