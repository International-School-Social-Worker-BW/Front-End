import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from '../store/actions';

const Input = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
`


const Login = (props) => {
   
    const [credentials, setCredentials] = useState({
      useremail: 'jon@jon.com',
      password: 'password'
    });
  
    const handleChange = event => {
      event.preventDefault();
      setCredentials({...credentials, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      console.log(credentials);
      event.preventDefault();
      props.login(credentials, props);
      
    }
  
    return (

      // <div className="login-section">
      //   <div className="logo-title">
      //     <Link to="/">Educell</Link>
      //   </div>
      //   <div className="login-page">
      //     <div className="login-header">
      //       Sign In
      //     </div>
          <form className='login-form' onSubmit={handleSubmit}>      
            <Input className = "login-input">
              <label htmlFor="username">Email or Username</label>
              <input
                id="username"
                type='text'
                name='useremail'
                onChange={handleChange}
                value={credentials.useremail}
                required
              />
            </Input>

            
            
            <Input className = "login-input">
              <label htmlFor="password">Password</label>
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
    );
  };
  
const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { login })(Login);
