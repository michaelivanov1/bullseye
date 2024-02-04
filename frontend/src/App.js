import React, { useState, useRef } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/HomePage/About';
import Footer from './Components/Footer/Footer';

function App() {

  const aboutSectionRef = useRef();

  const handleButtonClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <HomePage onLearnMoreClick={handleButtonClick} />
      <About aboutSectionRef={aboutSectionRef} />
      <Footer />
    </div>
  );
}

export default App;
