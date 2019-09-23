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
      <>
        <form className='login-form'>
          
          <input
              type='text'
              name='username'
              onChange={handleChange}
              value={credentials.username}
              required
          />
          <input
              type='password'
              name='password'
              onChange={handleChange}
              value={credentials.password}
              required
          />
  
          <button onClick={login}>Login</button>
  
        </form>
      </>
    );
  };
  
  export default Login;