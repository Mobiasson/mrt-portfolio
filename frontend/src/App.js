import './App.css';
import React from 'react';
import Navbar from './navbar/Navbar.js';
import HomePage from './pages/Home/HomePage.js';
import About from './pages/About/About.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticlesComponent from './components/animations/particles.js';

function App() {
  return (
    <div className='App'>
      <ParticlesComponent id="particles" />
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/about-me' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;