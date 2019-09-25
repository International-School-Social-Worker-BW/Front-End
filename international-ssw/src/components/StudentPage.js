import React from "react";
import {connect} from 'react-redux';
import { Link, Route } from 'react-router-dom';

import ProtectedNavBar from './ProtectedNavBar.js';

const StudentPage = (props) => {
  console.log('studentpropsmadeit', props);

  const student = props.students.find(
    student => student.id === Number(props.match.params.id)
  );

  
    return (
      <div >
        <ProtectedNavBar/>
        
      </div>
    )
  }

  export default StudentPage;