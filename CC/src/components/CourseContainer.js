import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";
import SortBar from "./SortBar";

class CourseContainer extends Component {

  state={
    courses:[],
    selectedCourse:[],
    filteredStudents:[],
    sort: ''
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

  sortedStudents=()=>{
     let students=[...this.state.filteredStudents]
       if (this.state.sort === "Name"){
         students = students.sort((a, b)=>{
           return a.name.localeCompare(b.name);
         });
       } else if (this.state.sort === "Attending"){
         students = students.sort((a,b)=>{
           return b.attending - a.attending;
         });
       }
       
       return students     
  }

  handleSort=(sort)=>{
    this.setState({sort})
  }

  deleteStudent=(std)=>{
    const newFilteredStudent=[...this.state.filteredStudents].filter(student=>student.id !==std.id)
    this.setState({filteredStudents: newFilteredStudent})
    // Not sure if changes should persist in the backend, if it should persist uncomment the code below
    
    //  fetch(`http://localhost:6001/students/${std.id}`, {
		// 	method: 'PATCH',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Accept: 'application/json',
		// 	},
		// 	body: JSON.stringify({
    //     course: ''
    //   }),
		// })
  }

  render() {
  
    return (
      <div className="ui grid container">
        <CourseDetails course={this.state.selectedCourse}/>
        <CourseSelector courses={this.state.courses} handleChange={this.handleChange}/>
        {this.state.filteredStudents.length!==0?
        <SortBar sort={this.state.sort} handleSort={this.handleSort} /> : null}
        <StudentsList students={this.sortedStudents()} handleAttending={this.handleAttending} deleteStudent={this.deleteStudent}/>
      </div>
    );
  }
}

export default CourseContainer;
