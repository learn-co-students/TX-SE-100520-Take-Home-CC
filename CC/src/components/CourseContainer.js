import React, { Component } from "react";
import CourseDetails from "./CourseDetails";
import CourseSelector from "./CourseSelector";
import StudentsList from "./StudentsList";

class CourseContainer extends Component {
    state = {
        courses: [],
        students: [],
        // selectedCourse: null,
        filter: "",
    };

    componentDidMount() {
        fetch("http://localhost:3000/courses")
            .then((res) => res.json())
            .then((courses) => this.setState({ courses }));

        fetch("http://localhost:3000/students")
            .then((res) => res.json())
            .then((students) => this.setState({ students }));
    }

    // onChange = () => {
    //     // let course = this.state.courses.map((course) => course.name);
    //     this.setState({
    //         filters: {
    //             courseName:
    //         },
    //     });
    // };

    // handleChangeCourse = (selectedCourse) => {
    //     this.setState({ selectedCourse });

    // filterDropDown = (course) => {
    //     this.state.courses.filter((course) => {
    //         return course.name === course;
    //     });
    // };

    //     this.state.courses.filter(
    //         (course) => course.name ===
    //     );
    //     this.setState({ filter: this.state.courses.name });
    // };

    handleChangeCourse = (e) => {
        this.setState({
            filter: e.target.value,
        });
    };

    render() {
        let courses = this.state.courses;

        let students = this.state.filter
            ? this.state.students.filter(
                  (student) => student.course === this.state.filter
              )
            : this.state.students;
        // let course = this.state.courses.map((course) => course.name);

        return (
            <div className="ui grid container">
                <CourseDetails courses={courses} />
                <CourseSelector
                    handleChangeCourse={this.handleChangeCourse}
                    courses={courses}
                />
                <StudentsList students={students} />
            </div>
        );
    }
}

export default CourseContainer;
