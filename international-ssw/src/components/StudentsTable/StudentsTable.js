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
              <RowData key={student.studentid} student={student}/>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" className="text-center">Student data</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
