import React from 'react';


export const RowData = (props) => {
  const { age, grade, studentfirstname, studentlastname } = props.student;
  return (
    <tr>
      <td>{ studentfirstname } { studentlastname }</td>
      <td>{ age }</td>
      <td>{ grade }</td>
      <td>04/03/2019</td>
    </tr>
  )
}
