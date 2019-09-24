import React from 'react'
import styled from 'styled-components'

import Login from './Login.js'

import '../styles/login-page.scss'


const LoginPage = (props) => {
    return (
        <div className = "login-page">
            <div className = "container">
                <div className = "title">
                    <p>Welcome Back to Educell</p>
                </div>
                <Login props={props}/>
                <div className = "need-account">
                    <p>Don't have an account? <a href="http://social-worker-tool/signup">Join Here</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;