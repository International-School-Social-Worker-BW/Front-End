import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from '../store/actions';

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

      <div className="login-section">
        <div className="logo-title">
          Educell
        </div>
        <div className="login-page">
          <div className="login-header">
            Sign In
          </div>
          <form className='signin-form' onSubmit={handleSubmit}>      
            <div className="text-input">
              <label htmlFor="username">Email or Username</label>
              <input
                id="username"
                type='text'
                name='username'
                onChange={handleChange}
                value={credentials.username}
                required
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  value={credentials.password}
                  required
                />
            </div>
            <button onClick={login}>Login</button>
          </form>
        </div>
      </div>
    );
  };
  
const mapStateToProps = state => {
    return {error: state.error}
}

export default connect(mapStateToProps, { login })(Login);