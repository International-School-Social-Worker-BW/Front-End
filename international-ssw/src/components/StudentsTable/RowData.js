import React from 'react';

export const RowData = (props) => {
  const { age, lastVisit, grade, name } = props.student;
  return (
    <tr>
      <td>{ name }</td>
      <td>{ age }</td>
      <td>{ grade }</td>
      <td>{ lastVisit }</td>
    </tr>
  )

}
