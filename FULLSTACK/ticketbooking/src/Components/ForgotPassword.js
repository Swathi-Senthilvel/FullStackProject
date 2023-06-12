import React, { useState } from 'react';
import './Login1.css';
import axios from 'axios';

function ForgetPasswordPage() {
  const [username, setUsername] = useState('');
  const [password, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleForgetPassword = async () => {
    try {
      const response = await axios.put('http://localhost:8080/user/forgetpassword', {
        username,
        password,
      });

      if (!response.status === 200) {
        throw new Error('Failed to send reset password request');
      }
      alert(response.data);

      // setSuccessMessage('Reset password successful!');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while resetting the password');
    }
  };

  return (
    <div className='loginbody'>
      <div className='login-form'>
        <h1>Forget Password</h1>

        {/* Username */}
        <div className="form-group">
          <label htmlFor="username" className='lab'>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='inp'
          />
        </div>

        {/* New Password */}
        <div className="form-group">
          <label htmlFor="password" className='lab'>New Password</label>
          <input
            type="password"
            id="newPassword"
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
            className='inp'
          />
        </div>

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Success Message */}
        {/* ~{successMessage && <p className="success-message">{successMessage}</p>} */}

        {/* Reset Password Button */}
        <button onClick={handleForgetPassword} className='but'>Reset Password</button>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
