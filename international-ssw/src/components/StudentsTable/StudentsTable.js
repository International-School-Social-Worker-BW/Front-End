import React from 'react';
import { Header } from './Header';
import { RowData } from './RowData';
import { NavLink } from 'react-router-dom';

// // Some dummy data
// import data from '../../utils/dummyData';

export const StudentsTable = (props) => {
  
  return (
    <div className="table-responsive" data-pattern="priority-columns">
      <table summary="A list of all Students" className="table table-bordered table-hover">
        <caption className="text-center"></caption>
        <Header />
        <tbody>
          {props.student.map(student => (
            <NavLink key={student.studentid} to={`/student/${student.studentid}`} style={{ textDecoration: 'none', color: 'green', display: 'flex' }}>
            <RowData key={student.studentid} student={student}/></NavLink>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-center">Student data</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
