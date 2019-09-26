//Protected page This is a dummy protected page for now that will render a list of student, 
//have an add student button, and also have a nav bar
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';
import { Link, withRouter } from 'react-router-dom';
import { fetchStudents, fetchUser } from '../store/actions';
import { connect } from 'react-redux';
import { StudentsTable } from './StudentsTable/StudentsTable';
import Pagination from './Pagination.js';

class UserHomePage extends React.Component { 
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         currentUser: {}
    //     }
    // } 
     
    componentDidMount(){
        // this.props.fetchUser();
        this.props.fetchStudents();       
        console.log("wegothere", this.props);
    }
   render()
   { 
   return (
        <section className="home-page">
            
            <ProtectedNavBar />
            <div className="container home-page-content">
              <h1>Ghana Makes A Difference</h1>
              
              <Link to='/add' className="add-student-btn">
                Add Student
              </Link>
              
              <div className="students-list">
                  <StudentsTable student={this.props.data} />
              </div>
              <Pagination />
            </div>
        </section>
    )}
}
const mapStateToProps = state =>   ({
    data: state.studentReducer.data,
    fetching: state.studentReducer.fetching,
    error: state.studentReducer.error
   })
export default withRouter(connect(mapStateToProps, { fetchStudents }) (UserHomePage));
