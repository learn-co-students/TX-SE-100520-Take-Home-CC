import React from "react";

const Student = () => (
  <tr style={{ textAlign: "center" }}>
    <td>"...your code here"</td>
    <td>"...your code here"</td>
    <td>"...your code here"</td>
    <td>
      <input
        type="checkbox"
        checked={null /* if true, this checkbox will be checked! */}
        onClick={() => console.log("You clicked me!")}
      />
    </td>
  </tr>
);

export default Student;
