import React from 'react';

const StudentRow = function(props) {
  const student = props.student;


  return (
    <tr>
      <td>{student.fullName}</td>
    </tr>
  )

}

export default StudentRow;
