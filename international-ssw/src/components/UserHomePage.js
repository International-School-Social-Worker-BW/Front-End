//Protected page This is a dummy protected page for now that will render a list of student, 
//have an add student button, and also have a nav bar
import React from "react";
import ProtectedNavBar from './ProtectedNavBar.js';

const UserHomePage = props => {
    return (
        <div>
            <ProtectedNavBar />

        </div>
    )
}

export default UserHomePage;