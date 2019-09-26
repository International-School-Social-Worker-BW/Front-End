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
     
    componentDidMount(){
        this.props.fetchUser();
        this.props.fetchStudents();
        // const userRole = this.props.user.userroles;
        console.log("wegothere", this.props.user.userroles);
    };
    
    // ButtonRender = ({ userRole }) => {
    //     <div>
    //         {userRole.length > 1 && <Link to='/add' className="add-student-btn">Add Student</Link>}
    //         {userRole.length === 1 && <Link to='/role' className="add-student-btn">Change Role</Link>}
    //     </div>
    // };
        userRole = ()=> {
            if (this.props.user.userroles && this.props.user.userroles.length > 1){
                console.log('admin');
                return <Link to='/add' className="add-student-btn">Add Student</Link>
            }else {
                console.log('user');
                return <Link to='/role' className="add-student-btn">Change Role</Link>
            }
        }
      render() {
        // const userRole = this.props.user.userroles;
        // if (userRole.length > 1){
        //     button = <Link to='/add' className="add-student-btn">
        //     Add Student
        // </Link>
        // } else {
        //     button = <Link to='/role' className="add-student-btn">
        //                 Change Role
        //             </Link>
        // }
        return (
            <section className="home-page">
                <ProtectedNavBar />
                <div className="container home-page-content">
                    <h1>{this.props.user.organization}</h1>
                    {/* <ButtonRender /> */}
                    {this.userRole()}
                    <div className="students-list">
                        <StudentsTable student={this.props.data} />
                    </div>
                    <Pagination />
                </div>
            </section>
        )
   }
}
const mapStateToProps = state =>   ({
    data: state.studentReducer.data,
    fetching: state.studentReducer.fetching,
    error: state.studentReducer.error,
    user: state.roleReducer.user
   })

export default withRouter(connect(mapStateToProps, { fetchStudents, fetchUser }) (UserHomePage));
