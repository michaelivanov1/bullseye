import React from "react";
import logo from "../images/logo.png";
import TickerTapeWidget from "../Widgets/TickerTape/TickerTape";

const HomePage = () => {
  return (
    <div>
      <div
        className="relative bg-hero-image bg-cover w-full flex"
        style={{ height: "100vh" }}
      >

        <div className="w-full">
          <TickerTapeWidget />
          <div className="mx-auto">
            <div className="p-8 bg-black bg-opacity-20">

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

      <div className="absolute text-primary text-left top-72 w-1/2 px-40">
        <h1
          className="text-5xl uppercase"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            lineHeight: "1.2",
          }}
        >
          patience is the <br />
          currency of success
        </h1>
        <h1 className="my-10 text-header">
          Some dummy text here Some dummy text here Some dummy text here Some
          dummy text here Some dummy text here
        </h1>
        <button className="text-2xl">Learn More</button>
      </div>
    </div>
  );
};

export default HomePage;