// /frontend/src/components/Login.js
import React, { useState } from 'react';
import '../css/login.css'

const Login = ({ onLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contentVisible, setContentVisible] = useState(true);

  const handleLogin = () => {
    // Add your login logic here
    // If login is successful, call the onLogin callback
    onLogin();
    // Hide the content after successful login
    setContentVisible(false);

    //   const response = await axios.post('http://localhost:3001/user/login', { email, password });
    //   console.log(response.data);
    //   // Redirect or perform actions upon successful login
    // } catch (error) {
    //   console.error(error.response.data);
    // }
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
        </div>
      )}

      {!contentVisible && (
        <h1 className='introText'>Welcome to my Assignment 9 Workplace</h1>
      )}
    </>
  );
};

export default Login;
