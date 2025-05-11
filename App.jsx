// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import DonateBlood from './pages/DonateBlood';
import RequestBlood from './pages/RequestBlood';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/donate" element={<DonateBlood />} />
        <Route path="/request" element={<RequestBlood />} />
      </Routes>
    </Router>
  );
};

export default App;
