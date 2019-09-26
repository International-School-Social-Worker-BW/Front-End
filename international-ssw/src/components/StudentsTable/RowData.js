import React from 'react';
import { NavLink } from 'react-router-dom';


export const RowData = (props) => {
  const { age, grade, studentfirstname, studentlastname } = props.student;
  return (
    <tr>
      <td title="Click on name to view student">
        <NavLink to={`/student/${props.student.studentid}`} >
          { studentfirstname } { studentlastname }
        </NavLink>
      </td>
      <td>{ age }</td>
      <td>{ grade }</td>
      <td>04/03/2019</td>
    </tr>
  )
}
