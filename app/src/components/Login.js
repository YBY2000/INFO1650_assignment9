// /frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contentVisible, setContentVisible] = useState(true);

  const handleLogin = async () => {

    try {
      const response = await axios.post('http://localhost:3001/user/login', { email, password });
      console.log(response.data);
      // Redirect or perform actions upon successful login
      // Add your login logic here
      // If login is successful, call the onLogin callback
      onLogin();
      // Hide the content after successful login
      setContentVisible(false);
    } catch (error) {
      console.error(error.response.data);
      toast.error('Invalid email or password', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      {contentVisible && (
        <div className='loginContainer'>
          <h1>Login</h1>

          <form>
            <label>
              Full Name:
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button className="loginBtn" type="button" onClick={handleLogin}>
              Login
            </button>
          </form>

          {/* ToastContainer for displaying notifications */}
          <ToastContainer />
        </div>
      )}

      {!contentVisible && (
        <h1 className='introText'>Welcome to my Assignment 9 Workplace</h1>
      )}
    </>
  );
};

export default Login;
