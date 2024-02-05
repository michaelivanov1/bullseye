// MarketNews.js
import React, { useRef } from "react";
import TickerTapeWidget from "../../Widgets/TickerTape/TickerTape";
import Navbar from "../Navbar/Navbar";
import "animate.css";

const MarketNews = ({}) => {
  return (
    <div>
      <div className="relative bg-hero-image bg-cover w-full h-screen">
        <TickerTapeWidget />
        <Navbar />
      </div>
    </div>
  );
};

export default MarketNews;
