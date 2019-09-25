//Protected page 
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { fetchStudents } from '../store/actions';
import { connect } from 'react-redux';
import { StudentsTable } from './StudentsTable/StudentsTable';
import Pagination from './Pagination.js';


const StudentListPage = (props) => { 
    console.log('studentLISTpropsmadeit', props); 
    
   return (
        <section className="home-page">
            
            <ProtectedNavBar />
            <div className="container home-page-content">
            <h1>Ghana Makes A Difference</h1>
            
            <Link to='/add'><button>Add Student</button></Link>
            
            <div className="students-list">
                <StudentsTable student={this.props.data} />
            </div>
            <Pagination />
            </div>
        </section>
    )
}


export default StudentListPage;
// const mapStateToProps = state =>   ({
//     data: state.studentReducer.data,
//     fetching: state.studentReducer.fetching,
//     error: state.studentReducer.error
//    })
// export default connect(mapStateToProps, { fetchStudents }) (UserHomePage);