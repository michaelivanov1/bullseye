import React, { useRef } from "react";
import learnmorebutton from "../../images/homepage/hero-section/learn-more-button.png";
import TickerTapeWidget from "../../Widgets/TickerTape/TickerTape";
import Navbar from "./Navbar";
import "animate.css";

import About from "./About";

const HomePage = () => {
  const aboutSectionRef = useRef();

  const handleButtonClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="relative bg-hero-image bg-cover w-full flex h-screen">
        <div className="w-full">
          <TickerTapeWidget />
          <div className="mx-auto animate__animated animate__fadeInUp">
            <Navbar />          
          </div>
        </div>
      </div>

      <div className="absolute sm:text-left top-72 sm:w-2/5 sm:pl-28 animate__animated animate__fadeInDown">
        <h1 className="text-md lg:text-7xl text-header">
          Patience Is The
          Currency Of Success
        </h1>
        <h1
          className="text-subheader my-10">
          A lightning-fast solution to view all market data at a glance. Explore
          charts, news, and more on Bullseye.
        </h1>
        <div className="transform hover:scale-105 transition-transform cursor-pointer inline-block max-w-max">
          <img src={learnmorebutton} onClick={handleButtonClick} />
        </div>
      </div>
      <About aboutSectionRef={aboutSectionRef} />
    </div>
  );
};

export default HomePage;