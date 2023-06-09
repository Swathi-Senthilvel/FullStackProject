import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Paper, TextField } from '@mui/material';
import validator from 'validator';
import './Login1.css';

function Signup() {
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConPassword] = useState('');

  const sendDb = (e) => {
    e.preventDefault();

    const project = { age, email, name, password, username };

    if (age.length === 0 || email.length === 0 || password.length === 0 || name.length === 0 || username.length === 0) {
      alert('Enter all fields');
    } else if (!validator.isEmail(email)) {
      alert('Enter a valid email');
    } else if (password !== conpassword) {
      alert('Password and Confirm Password must be the same');
    } else {
      fetch('http://localhost:8080/signup/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      })
        .then(() => {
          console.log('New Detail Added');
          console.log(JSON.stringify(project));
          console.log(e);
          nav('/login');
        });
    }
  };

  return (
    <div
    style={{
      backgroundImage: 'url(../travel.jpg)',
      height: '100vh',
      marginTop: '0px',
      // padding: '0px',
      // fontSize: '50px',
       backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // opacity: '0.95',
       display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    
      <div id="body">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>CREATE AN ACCOUNT</h1>
              <p>Get started for free!</p>
            </div>

            <form>
              <Paper variant="outlined" style={{ width: '350px', borderRadius: '20px', opacity: '0.7', padding: '30px' }}>
                <div className="input">
                  {/* <i className="fa-solid fa-user"></i> */}
                  <TextField label="Name" type="text" placeholder="Enter your name" variant="outlined" required fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                  <i className="fa-solid fa-user"></i>
                  <TextField label="Username" type="text" placeholder="Enter your username" variant="outlined" required fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                  <i className="fa-solid fa-envelope"></i>
                  <TextField label="Email" type="text" placeholder="Enter your email" variant="outlined" required fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                  <i className="fa-solid fa-envelope"></i>
                  <TextField label="Age" type="text" placeholder="Enter your age" variant="outlined" required fullWidth value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="input">
                  <i className="fa-solid fa-lock"></i>
                  <TextField label="Password" type="password" placeholder="Enter your password" variant="outlined" required fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input">
                <i className="fa-solid fa-lock"></i>
                  <TextField label="Confirm Password" type="password" placeholder="Enter your confirm password" variant="outlined" required fullWidth value={conpassword} onChange={(e) => setConPassword(e.target.value)} />
                </div>
              </Paper>
              <br />
              {/* <Link to="/login">a</Link> */}
              <button className="signup-btn" onClick={sendDb}>SIGN UP</button>
            </form>
            {/* <Link to="/login" className="signup-btn">SIGNUP</Link> */}
            <Link to="/login">
              <p>Already have an account? Sign in</p>
            </Link>
          </div>
        </div>
      </div>
      </div>
   
  );
}

export default Signup;


