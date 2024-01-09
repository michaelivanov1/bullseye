import React from "react";
import logo from "../images/homepage/logo.png";
import learnmorebutton from "../images/homepage/learn-more-button.png";
import TickerTapeWidget from "../Widgets/TickerTape/TickerTape";
import "animate.css";

const HomePage = () => {
  return (
    <div>
      <div
        className="relative bg-hero-image bg-cover w-full flex"
        style={{ height: "100vh" }}
      >

        <div className="w-full">
          <TickerTapeWidget />
          <div className="mx-auto animate__animated animate__fadeInUp">
            <div className="p-8 bg-black bg-opacity-30">

              <ul className="flex space-x-24 justify-center items-center">
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
                <div className="px-14">
                  <img src={logo} alt="Logo" />
                </div>
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

      <div className="absolute text-left top-72 w-2/5 pl-28 animate__animated animate__fadeInDown">
        <h1
          className="text-6xl text-white"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            lineHeight: "1.2",
          }}
        >
          Patience Is The <br />
          Currency Of Success
        </h1>
        <h1 className="my-10 text-header" style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          lineHeight: "1.6",
        }}>
          A lightning-fast solution to view all market data at a glance. Explore charts, news, and more on Bullseye.
        </h1>
        {/* <button className="flex items-center text-2xl text-black border p-2 border-black bg-green-500  hover:bg-green-600">
          Learn More

        </button> */}

        <div className="transform hover:scale-105 transition-transform cursor-pointer inline-block max-w-max">
          <img src={learnmorebutton} />
        </div>


      </div>
    </div>
  );
};

export default HomePage;