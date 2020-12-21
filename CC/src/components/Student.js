import React from "react";

const Student = ({student, handleAttending, deleteStudent}) => (
  <tr style={{ textAlign: "center" }}>
    <td>{student.name}</td>
    <td>{student.class_year}</td>
    <td>{student.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={student.attending}
        onClick={() => handleAttending(student)}
      />
    </td>
    <td>
      <button 
        className="negative ui button"
        onClick={()=> deleteStudent(student)}
        >Remove
      </button>
    </td>
  </tr>
);

export default Student;
