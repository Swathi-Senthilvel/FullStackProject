import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Paper, TextField } from '@mui/material';

import './Login1.css';

function Login1() {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const fetchData = () => {
    return fetch('http://localhost:8080/login/get')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const authenticate = (e) => {
    e.preventDefault();
    const userCheck = user.find((user) => user.username === username && user.password === password);

    if (username.length === 0) {
      alert('Enter EmployeeID');
    } else if (password.length === 0) {
      alert('Enter password');
    } else if (!userCheck) {
      alert('Wrong Username or Password!');
    } else {
      nav('/home');
    }
  };

  return (
    <section className="back">
      <div id="body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>BOOK MY TICKET</h1>
              <p>Enter Credentials For Login</p>
            </div>

            <form>
              <Paper variant="outlined" style={{ width: '350px', borderRadius: '20px', opacity: '0.7', padding: '30px' }}>
                <TextField label="UserName" type="text" placeholder="Enter your name" variant="outlined" required fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                <TextField label="PassWord" type="password" placeholder="Enter your password" variant="outlined" required fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
              </Paper>

              <br />
              <Link to="/home"></Link>
              <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
            </form>

            <Link to="/register">
              <p>No Account? Signup Now!</p>
              </Link>
              <Link to="/forgot">
              <p>Forgot Password?</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login1;
