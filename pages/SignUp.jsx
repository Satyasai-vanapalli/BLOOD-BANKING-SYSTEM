// src/pages/SignUp.jsx
import React from 'react';

const SignUp = () => (
  <div className="dashboard-container">
    <div className="login-container">
      <h1>Sign Up</h1>
      <form className="login-form">
        <div className="input-group">
          <input type="text" placeholder="Full Name" className="input-field" />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" className="input-field" />
        </div>
        <div className="action-buttons">
          <button type="submit" className="login-button">Register</button>
        </div>
      </form>
    </div>
  </div>
);

export default SignUp;
