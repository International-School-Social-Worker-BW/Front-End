import React from 'react';
import { Header } from './Header';
import { RowData } from './RowData';

export const StudentsTable = (props) => {
  
  return (
    <div className="table-responsive" data-pattern="priority-columns">
      <table summary="A list of all Students" className="table table-bordered table-hover">
        <caption className="text-center"></caption>
        <Header />
        <tbody>
          {props.student.map(student => (
<<<<<<< HEAD
            <NavLink key={student.studentid} to={`/student/${student.studentid}`} style={{ textDecoration: 'none', color: 'green', display: 'flex' }}>
            <RowData key={student.studentid} student={student}/></NavLink>
=======
              <RowData key={student.studentid} student={student}/>
>>>>>>> 7ba38061dcc02bac49e6b0763f2a34c12e086521
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
