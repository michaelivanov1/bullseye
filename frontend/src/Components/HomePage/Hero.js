import React, { useState, useRef } from "react";
import logo from "../../images/homepage/hero-section/logo.png";
import learnmorebutton from "../../images/homepage/hero-section/learn-more-button.png";
import TickerTapeWidget from "../../Widgets/TickerTape/TickerTape";
import "animate.css";

// 
import About from "./About";

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutSectionRef = useRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleButtonClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div
        className="relative bg-hero-image bg-cover w-full flex"
        style={{ height: "100vh" }}
      >
        <div className="w-full">
          <TickerTapeWidget />
          <div className="mx-auto animate__animated animate__fadeInUp">
            <div className="p-8 bg-black bg-opacity-30 ">
              <div className="flex justify-center">
                <img src={logo} alt="Logo" />
              </div>
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="navbar-burger flex items-center text-blue-600 p-3 "
                >
                  <svg
                    className="block h-6 w-6 fill-current hover:bg-sky-700"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
              <div className="lg:flex lg:space-x-24 lg:justify-center lg:items-center">
                <ul
                  className={`${mobileMenuOpen ? "block" : "hidden"
                    } lg:flex lg:space-x-24 lg:items-center`}
                >
                  <li>
                    <a href="#" className="text-primary text-2xl">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-2xl">
                      Market Activity
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-2xl">
                      Market News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary text-2xl">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute sm:text-left top-72 sm:w-2/5 sm:pl-28 animate__animated animate__fadeInDown">
        <h1
          className="text-md lg:text-6xl text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            lineHeight: "1.2",
          }}
        >
          Patience Is The <br />
          Currency Of Success
        </h1>
        <h1
          className="text-sm my-10 text-header"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            lineHeight: "1.6",
          }}
        >
          A lightning-fast solution to view all market data at a glance. Explore
          charts, news, and more on Bullseye.
        </h1>
        {/* <button className="flex items-center text-2xl text-black border p-2 border-black bg-green-500  hover:bg-green-600">
          Learn More
        </button> */}
        <div className="transform hover:scale-105 transition-transform cursor-pointer inline-block max-w-max">
          <img src={learnmorebutton} onClick={handleButtonClick} />
        </div>
      </div>


      <About aboutSectionRef={aboutSectionRef} />

    </div>
  );
};

export default HomePage;
