import React from "react";
import Student from "./Student";

const StudentsList = ({students, handleAttending, deleteStudent}) => (
  <table className="ui celled striped padded table unstackable">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">Student Name</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Class Year</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Course Percentage</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Attending</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Delist Student</h3>
        </th>
      </tr>

      {students?
      students.map(student=> <Student key={student.id} student={student} handleAttending={handleAttending} deleteStudent={deleteStudent}/>)/* a row per student should go here */
      :
      null
      }
    </tbody>
  </table>
);

export default StudentsList;
