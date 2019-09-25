//Protected page This is a dummy protected page for now that will render a list of student, 
//have an add student button, and also have a nav bar
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';
import { NavLink } from 'react-router-dom';
import { fetchStudents } from '../store/actions';
import { connect } from 'react-redux';
import { StudentsTable } from './StudentsTable/StudentsTable';
import Pagination from './Pagination.js';


class UserHomePage extends React.Component {  
    
    componentDidMount(){
        this.props.fetchStudents();
        console.log("wegothere");
    }
   render() 
   
   
   { console.log("userpage", this.props.data); 
   return (
        <section className="home-page">
            <ProtectedNavBar />
            <div className="container home-page-content">
            <h1>Ghana Makes A Difference</h1>
            
            <NavLink to='/add'><button>Add Student</button></NavLink>
            
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
export default connect(mapStateToProps, { fetchStudents }) (UserHomePage);
