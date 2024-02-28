// HomePage.js
import React, { useRef } from "react";
import About from "./About";
import StockMarketWidget from "../../Widgets/StockMarket/StockMarket";
import MarketStatus from "../../Helpers/MarketStatus";
import "animate.css";

const HomePage = ({ handleButtonClick }) => {
  const aboutSectionRef = useRef();

  return (
    <div>
      <div className="relative bg-hero-image bg-cover w-full h-screen">
        <div className="w-full md:flex" style={{ height: "80vh" }}>
          <div className="md:w-2/5 md:pl-28 pt-24 animate__animated animate__fadeInDown text-center md:text-left ">
            <h1 className="text-4xl lg:text-7xl text-header ">
              Patience is the Currency of Success
            </h1>

            <h1 className="text-subheader my-10">
              A lightning-fast solution to view all market data at a glance.
              Explore charts, news, and more on Bullseye.
            </h1>

            <button
              // onClick={handleButtonClick} need to redo
              className="w-[150px] sm:w-[200px] bg-transparent border-2 border-green-500 text-primary rounded-full p-3 text-md sm:text-2xl hover:bg-green-500 hover:text-white transition-all duration-300 md:"
            >
              Learn More
            </button>
          </div>

          <div className="md:w-3/5 pt-12 md:pt-24 h-full flex justify-center">
            <h1 className="text-md lg:text-xl text-header">
              <StockMarketWidget />
              <MarketStatus />
            </h1>
          </div>
        </div>
      </div>
      <About
        className="bg-about-section-banner"
        aboutSectionRef={aboutSectionRef}
      />
    </div>
  );
};

export default HomePage;
