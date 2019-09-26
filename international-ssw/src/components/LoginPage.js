import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login.js'

import '../styles/login-page.scss'
import { NavBar } from './NavBar';

const LoginPage = (props) => {
    return (
        <div>
            <NavBar/>
            <div className = "login-page">
                <div className = "container">
                    <div className = "title">
                        <p>Welcome Back to Educell</p>
                    </div>
                    <Login props={props}/>
                    <div className = "need-account">
                        <p>Don't have an account? <Link to='/signup'>Join Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;