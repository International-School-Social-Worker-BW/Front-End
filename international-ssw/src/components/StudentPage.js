import React from "react";
import {connect} from 'react-redux';
import { Link, Route } from 'react-router-dom';

import ProtectedNavBar from './ProtectedNavBar.js';

const StudentPage = (props) => {
  console.log('studentpropsmadeit', props);

  // const student = props.students.find(
  //   student => student.id === Number(props.match.params.id)
  // );

  
    return (
      <div >
        <ProtectedNavBar />
        <div className = "name-editbuttond">
          <h1>{props.student.studentfirstname} {props.student.studentlastname}</h1>
          <button>Edit Information</button>
        </div>

      <div className = "student-info-1"></div>
        <h2>{props.student.age}</h2>
        <h2>{props.student.grade}</h2>
        <h2>{props.student.status}</h2>
        <h2>{props.student.birthcertificate}</h2>
        <h2>{props.student.insurance}</h2>
        <p></p>
      </div>
      
    )
  }
//   const mapStateToProps = state =>   ({
//     data: state.studentReducer.data,
//     fetching: state.studentReducer.fetching,
//     error: state.studentReducer.error
//    })
// export default connect(mapStateToProps, { }) (StudentPage);

export default StudentPage;
