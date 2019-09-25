import React from "react";
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import ProtectedNavBar from './ProtectedNavBar.js';
import '../styles/student-page.scss'

const StudentPage = (props) => {
  console.log('studentpropsmadeit', props);
  
    return (
      <div>
        <ProtectedNavBar />
        <div className = "info-container">
          <div className = "info">
          <div className = "name-editbutton">
            <h1>{props.student.studentfirstname} {props.student.studentlastname}</h1>
            <NavLink to={`/student/${props.student.studentid}/edit`}><button>Edit Information</button></NavLink>
          </div>

          <div className = "student-info">
            <h2><span>Age: </span>{props.student.age}</h2>
            <h2><span>Grade: </span>{props.student.grade}</h2>
            <h2><span>Status: </span>{props.student.status}</h2>
            <h2><span>Birth Certificate: </span>{props.student.birthcertificate}</h2>
            <h2><span>Insurance: </span>{props.student.insurance}</h2>
          </div>

          <div className="contact-info">
            <h2><span>Contact Name: </span>{props.student.contactname}</h2>
            <h2><span>Relation: </span>{props.student.relationship}</h2>
          </div>

          <div className ="contact-info-2">
            <h2><span>Contact Number: </span>{props.student.contactphone}</h2>
            <h2><span>Contact Email: </span>{props.student.contactemail}</h2>
          </div>

          <div className ="disabilty">
            <h2><span>Experiences a disability: </span>{props.student.specialneeds}</h2>
          </div>

          <div className = "background-info">
            <h1>Social History/Background</h1>
            <p>{props.student.backgroundinfo}</p>
          </div>

          <div className = "critical-info">
            <h1>Critical Information</h1>
            <p>{props.student.criticalinfo}</p>
          </div>
          </div>
        </div>
      </div>

    )
  }
//   const mapStateToProps = state =>   ({
//     data: state.studentReducer.data,
//     fetching: state.studentReducer.fetching,
//     error: state.studentReducer.error
//    })
export default connect(null, { }) (StudentPage);

// export default StudentPage;
