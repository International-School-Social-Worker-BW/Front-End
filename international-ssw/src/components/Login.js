import React, { useState } from "react";
import { connect } from "react-redux"
import styled from "styled-components"

import '../styles/sign-up.scss'
import '../styles/variables.scss'
import { login } from '../store/actions';

const Input = styled.div `
    display: flex;
    flex-direction: column;
`




const Login = (props) => {
    const [credentials, setCredentials] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = event => {
      event.preventDefault();
      setCredentials({...credentials, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      props.login(credentials, props);
    }
        
    return (
      <>
        <form className='login-form' onSubmit={handleSubmit}>
          
          <Input className = "login-input">
          <label className = "login-label">Email</label>
          <input
              type='text'
              name='username'
              onChange={handleChange}
              value={credentials.username}
              required
          />
          </Input>

          <Input className = "login-input">
          <label className = "login-label">Password</label>
          <input
              type='password'
              name='password'
              onChange={handleChange}
              value={credentials.password}
              required
          />
          </Input>
          <button className = "login-btn">Login</button>
  
        </form>
      </>
    );
  };
  const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { login })(Login);