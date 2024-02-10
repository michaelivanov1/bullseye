import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TickerTapeWidget from "./Widgets/TickerTape/TickerTape";

import MarketNews from "./Components/MarketNews/MarketNews";

function App() {
  const aboutSectionRef = useRef();

  const handleButtonClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="App bg-hero-image bg-cover"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Router>
        <TickerTapeWidget />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage handleButtonClick={handleButtonClick} />}
          />
          <Route path="/News" element={<MarketNews />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
