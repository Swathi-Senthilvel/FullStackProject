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


// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Paper, TextField } from '@mui/material';
// import './Login1.css';

// function Login1() {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [user, setUser] = useState('');
//   const [forgotPassword, setForgotPassword] = useState(false);
// //   const history = useHistory();

//   const fetchData = () => {
//     return fetch('http://localhost:8080/login/get')
//       .then((response) => response.json())
//       .then((data) => setUser(data));
//   };

//   const authenticate = (e) => {
//     e.preventDefault();
//     const userCheck = user.find((user) => user.password === newPassword);

//     if (newPassword.length === 0) {
//       alert('Enter New Password');
//     } else if (confirmPassword.length === 0) {
//       alert('Enter Confirm Password');
//     } else if (newPassword !== confirmPassword) {
//       alert('Passwords do not match!');
//     } else if (!userCheck) {
//       alert('Wrong Password!');
//     } else {
//       // Reset the password and redirect to login page
//       // Add your password reset logic here

//       // Redirect to login page
//     //   history.push('/');
//     }
//   };

//   const handleForgotPassword = () => {
//     setForgotPassword(true);
//     // Handle the forgot password logic here
//   };

//   return (
//     <section className="back">
//       <div id="body">
//         <div className="signup-form">
//           <div className="container">
//             <div className="header">
//               <h1>BOOK MY TICKET</h1>
//               <p>Enter Your New Password</p>
//             </div>

//             {forgotPassword ? (
//               <form>
//                 <Paper variant="outlined" style={{ width: '350px', borderRadius: '20px', opacity: '0.7', padding: '30px' }}>
//                   <TextField label="Email" type="email" placeholder="Enter your email" variant="outlined" required fullWidth />
//                   <br />
//                   <br />
//                 </Paper>

//                 <br />

//                 <input className="signup-btn" type="submit" value="RESET PASSWORD" />
//               </form>
//             ) : (
//               <form>
//                 <Paper variant="outlined" style={{ width: '350px', borderRadius: '20px', opacity: '0.7', padding: '30px' }}>
//                   <TextField label="New Password" type="password" placeholder="Enter your new password" variant="outlined" required fullWidth value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//                   <br />
//                   <br />
//                   <TextField label="Confirm Password" type="password" placeholder="Confirm your new password" variant="outlined" required fullWidth value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                   <br />
//                   <br />
//                 </Paper>

//                 <br />
//                   <Link to="/login"></Link>
//                 {/* <input onClick={authenticate} className="signup-btn" type="submit" value="RESET PASSWORD" /> */}
//                 <Link to="/login" class="signup-btn">RESET PASSWORD</Link>
//               </form>
//             )}

//             {/* <Link to="/">
//               <p>Back to Login</p>
//             </Link>
//             {!forgotPassword && (
//               <Link onClick={handleForgotPassword}>
//                 <p>Forgot Password?</p>
//               </Link>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login1;
