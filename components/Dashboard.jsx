import React, { useState } from 'react';
import './Dashboard.css'; // Add this to your CSS file for styling

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="dashboard-container">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-options">
          <button className="google-login">Continue with Google</button>
        </div>
        
        <form className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Username or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="action-buttons">
            <button type="button" onClick={handleLogin} className="login-button">Login</button>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
