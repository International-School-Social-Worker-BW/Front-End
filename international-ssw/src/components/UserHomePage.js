//Protected page This is a dummy protected page for now that will render a list of student, 
//have an add student button, and also have a nav bar
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';
import StudentCard from "./StudentCard.js";
import { NavLink } from 'react-router-dom';

class UserHomePage extends React.Component {
    componentDidMount(){
        this.props.fetchItem();
    }
   render() { return (
        <div>
            <ProtectedNavBar />
            
            <h1>Organization Name Prop here</h1>
            <NavLink to='/add'><button>Add Student</button></NavLink>
            {/*<NavLink to='/addvisit'><button>Add Visit</button></NavLink>
                    need to figure out logic to make button appear for user        
            */}
            <div>
                <StudentCard /> {/* map prop here to pass data*/}
            </div>
        </div>
    )}
}

export default UserHomePage;