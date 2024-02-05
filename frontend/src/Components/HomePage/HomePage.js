// HomePage.js
import React, { useRef } from "react";
import About from "./About";
import Footer from "../Footer/Footer";
import StockMarketWidget from "../../Widgets/StockMarket/StockMarket";
import MarketStatus from "../../Helpers/MarketStatus";
import "animate.css";

const HomePage = ({ onLearnMoreClick }) => {
  return (
    <div>
      <div className="relative bg-hero-image bg-cover w-full h-screen">
        <div className="w-full flex" style={{ height: "80vh" }}>
          <div className="w-2/5 sm:pl-28 pt-24 animate__animated animate__fadeInDown text-left">
            <h1 className="text-md lg:text-7xl text-header ">
              Patience is the Currency of Success
            </h1>

            <h1 className="text-subheader my-10">
              A lightning-fast solution to view all market data at a glance.
              Explore charts, news, and more on Bullseye.
            </h1>

            <button
              onClick={onLearnMoreClick}
              className="w-[200px] bg-transparent border-2 border-green-500 text-primary rounded-full p-3 text-2xl hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="w-3/5 pt-24 flex justify-center">
            <h1 className="text-md lg:text-xl text-header ">
              <StockMarketWidget />
              <MarketStatus />
            </h1>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
