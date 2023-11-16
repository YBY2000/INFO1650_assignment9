
// /frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    // If login is successful, set authenticated to true
    setAuthenticated(true);
  };

  return (
    <Router>
      <div>
        {authenticated && <Navbar />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
