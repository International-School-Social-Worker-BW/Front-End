import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = ({ history }) => {
   
    const [credentials, setCredentials] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = event => {
      event.preventDefault();
      setCredentials({...credentials, [event.target.name]: event.target.value });
    };
  
    const login = event => {
      event.preventDefault();
      axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          history.push('/protected');
        })
        .catch(err => console.log(err));
    };
  
    return (
      <div className="login-section">
        <div className="logo-title">
          Educell
        </div>
        <div className="login-page">
          <div className="login-header">
            Sign In
          </div>
          <form className='login-form'>
            
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
  
  export default Login;
