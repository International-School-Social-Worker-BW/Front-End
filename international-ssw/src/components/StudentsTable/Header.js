import React from 'react';

export const Header = (props) => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th data-priority="1">Age</th>
        <th data-priority="2">Grade</th>
        <th data-priority="3">Last Visit</th>
      </tr>
    </thead>
  )
}

