import React, { useRef } from "react";
// import learnmorebutton from "../../images/homepage/hero-section/learn-more-button.png";
import TickerTapeWidget from "../../Widgets/TickerTape/TickerTape";
import TickerOverview from "../../Widgets/TickerOverview/TickerOverview";
import SingleTickerWidget from "../../Widgets/SingleTicker/SingleTicker";
import StockMarketWidget from "../../Widgets/StockMarket/StockMarket";
import MarketStatus from "../../Helpers/MarketStatus";
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
      <div className="relative bg-hero-image bg-cover w-full h-screen">
        <TickerTapeWidget />
        <Navbar />
        <div className="w-full flex" style={{ height: '80vh' }}>


          <div className="w-2/5 sm:pl-28 pt-24 animate__animated animate__fadeInDown text-left">
            <h1 className="text-md lg:text-7xl text-header ">
              Patience is the Currency of Success
            </h1>

            <h1 className="text-subheader my-10">
              A lightning-fast solution to view all market data at a glance. Explore
              charts, news, and more on Bullseye.
            </h1>

            <button onClick={handleButtonClick} className="w-[200px] bg-transparent border-2 border-green-500 text-primary rounded-full p-3 text-2xl hover:bg-green-500 hover:text-white transition-all duration-300">
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

      <About aboutSectionRef={aboutSectionRef} />
    </div>
  );







  // return (
  //   <div>
  //     <div className="relative bg-hero-image bg-cover w-full flex h-screen">
  //       <div className="w-full">
  //         <TickerTapeWidget />
  //         <div className="mx-auto animate__animated animate__fadeInUp">
  //           <Navbar />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="absolute sm:text-left top-72 sm:w-2/5 sm:pl-28 animate__animated animate__fadeInDown">
  //       <h1 className="text-md lg:text-7xl text-header">
  //         Patience Is The
  //         Currency Of Success
  //       </h1>
  //       <h1
  //         className="text-subheader my-10">
  //         A lightning-fast solution to view all market data at a glance. Explore
  //         charts, news, and more on Bullseye.
  //       </h1>
  //       <div className="transform hover:scale-105 transition-transform cursor-pointer inline-block max-w-max">
  //       </div>
  //       <button onClick={handleButtonClick} class="w-[200px] bg-transparent border-2 border-green-500 text-primary rounded-full p-3 text-2xl hover:bg-green-500 hover:text-white transition-all duration-300">
  //         Learn More
  //       </button>
  //     </div>

  //     <About aboutSectionRef={aboutSectionRef} />
  //   </div>
  // );
};

export default HomePage;