import React from 'react'
import '../styles/registration-page.scss'
import Registration from './Registration.js';


const RegistrationPage = (props) => {
    return (
        <div className = "registration-page">
            <div className = "container">
                <div className = "title">
                    <p>Create an Educell Account</p>
                </div>
                <Registration props={props}/>
                <div className = "already-have-account">
                    <p>By joining you’re agreeing to our terms of service</p>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage