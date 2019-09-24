import React from 'react'
import styled from 'styled-components'

import Login from './Login.js'

import '../styles/login-page.scss'
import '../styles/variables.scss'

const LoginPage = (props) => {
    return (
        <div className = "login-page">
            <Login/>
        </div>
    )
}

export default LoginPage;