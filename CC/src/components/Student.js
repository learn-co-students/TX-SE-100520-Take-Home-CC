import React, { Component } from "react";

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.student.name,
            class_year: props.student.class_year,
            percentage: props.student.percentage,
            course: props.student.course,
            attending: props.student.attending,
        };
    }

    //flip attendance to true if it's false
    handleAttendance = () => {
        this.setState({
            attending: !this.state.attending,
        });
    };
    // console.log(props.student);
    //deconstruct the props
    render() {
        const { name, class_year, percentage, attending } = this.props.student;
        return (
            <tr style={{ textAlign: "center" }}>
                <td>{name}</td>
                <td>{class_year}</td>
                <td>{percentage}</td>
                <td>
                    <input
                        type="checkbox"
                        checked={attending}
                        onChange={this.handleAttendance}
                    />
                </td>
            </tr>
        );
    }
}

export default Student;
