//Protected page This is a dummy protected page for now that will render a list of student, 
//have an add student button, and also have a nav bar
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';
import StudentCard from "./StudentCard.js";
import { NavLink } from 'react-router-dom';
import { fetchStudents } from '../store/actions';
import { connect } from 'react-redux';


class UserHomePage extends React.Component {  
    
    componentDidMount(){
        this.props.fetchStudents();
        console.log("wegothere");
    }
   render() 
   
   
   { console.log("userpage", this.props.data); 
   return (
        <div>
            <ProtectedNavBar />
            
            <h1>Organization Name Prop here</h1>
            <NavLink to='/add'><button>Add Student</button></NavLink>
            
            <div>
                {this.props.data.map(data => <StudentCard key={data.studentid} data={data} />)} {/* map prop here to pass data*/}
            </div>
        </div>
    )}
}
const mapStateToProps = state =>   ({
    data: state.studentReducer.data,
    fetching: state.studentReducer.fetching,
    error: state.studentReducer.error
   })
export default connect(mapStateToProps, { fetchStudents }) (UserHomePage);

