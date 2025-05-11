// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to the Blood Bank</h1>
    <div className="home-buttons">
      <Link to="/login" className="btn primary">Login</Link>
      <Link to="/signup" className="btn secondary">Sign Up</Link>
    </div>
  </div>
);

export default Home;

