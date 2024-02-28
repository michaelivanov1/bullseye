import React from "react";
import { useState } from "react";
import TickerOverview from "../../Widgets/TickerOverview/TickerOverview";
import richText1 from "../../images/homepage/about-section/rich-text1.png";
import richText2 from "../../images/homepage/about-section/rich-text2.png";
import FundamentalDataWidget from "../../Widgets/FundamentalData/FundamentalData";
import CompanyProfileWidget from "../../Widgets/CompanyProfile/CompanyProfile";
import financialsRichText from "../../images/homepage/about-section/financials-rich-text.png";
import TechnicalAnalysisWidget from "../../Widgets/TechnicalAnalysis/TechnicalAnalysis";

const About = ({ aboutSectionRef }) => {
  const [ticker, setTicker] = useState("NVDA");

  const handleClick = (newTicker) => {
    setTicker(newTicker);
    console.log("New Ticker:", newTicker);
  };

  return (
    <div
      ref={aboutSectionRef}
      className="bg-about-section-banner w-full h-full pt-36 md:pt-0"
    >
      <div className=" px-4 md:block lg:flex h-screen">
        <div className=" h-2/6  lg:h-screen lg:w-2/5 text-center  lg:text-left ">
          <h1 className="text-primary text-lg lg:text-2xl mb-4 lg:pl-24 md:pt-24 lg:pt-0 hidden md:block">
            Why Bullseye?
          </h1>
          <h1 className="text-header text-4xl lg:text-7xl px-3 mb-4 lg:pl-24 pt-48 sm:pt-36 md:pt-0">
            Simplify
            <br />
            Visualization
          </h1>
          <h1 className="text-subheader px-3 lg:pl-24">
            Bullseye features a rich UI with easy access to financials, charts,
            news, and more market-related data.
          </h1>

          <div className="lg:pl-24 px-3 pt-20 flex lg:w-10/12 hidden lg:block">
            <img className="w-12 h-12" src={richText1} />
            <div className="flex flex-col">
              <h1 className="text-header md:pl-12 text-lg lg:text-2xl">
                Real-Time Updates
              </h1>
              <h1 className="text-subheader md:pl-12 text-sm">
                Stay ahead of market trends with real-time updates on stock
                prices, news, and key financial data
              </h1>
            </div>
          </div>

          <div className="lg:pl-24 px-3 pt-8 flex lg:w-10/12 hidden lg:block">
            <img className="w-12 h-12" src={richText2} />
            <div className="flex flex-col">
              <h1 className="text-header lg:pl-12 text-lg lg:text-2xl">
                Second Opinions
              </h1>
              <h1 className="text-subheader lg:pl-12 text-sm">
                Read what analysts think of companies by viewing Buy, Hold, &
                Sell recommendations
              </h1>
            </div>
          </div>
        </div>

        <div className="h-1/6 lg:h-screen lg:w-3/5 text-center lg:text-left flex pt-16 md:pt-6  lg:p-36">
          <TickerOverview />
        </div>
      </div>

      <div className="h-1/6 lg:h-screen lg:w-4/5 md:mx-auto -z-30  lg:block">
        <div className="">
          <h1 className="text-header text-4xl lg:text-7xl pt-12 md:pt-1">
            Dive Deep
          </h1>
          <h1 className="text-subheader text-1xl lg:text-4xl pt-4">
            Into company numbers
          </h1>
          {/* <h1 className="text-subheader pb-2">View company metrics, price history, dividends, income statements and more</h1> */}
        </div>

        {/* <img src={financialsRichText} /> */}

        <div className="p-12 mt-8 pb-16 border border-white border-opacity-40 rounded-3xl">
          <div className="flex items-center pl-4 space-x-4">
            <button
              onClick={() => handleClick("NVDA")}
              className="p-2 mb-8 border border-white border-opacity-20 rounded-lg text-white w-24 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              NVDA
            </button>
            <button
              onClick={() => handleClick("TSLA")}
              className="p-2 mb-8 border border-white border-opacity-20 rounded-lg text-white w-24 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              TSLA
            </button>
            <button
              onClick={() => handleClick("MSFT")}
              className="p-2 mb-8 border border-white border-opacity-20 rounded-lg text-white w-24 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              MSFT
            </button>
          </div>

          <div
            key={ticker}
            className="block lg:flex items-center justify-between"
          >
            <CompanyProfileWidget symbol={ticker} />
            <FundamentalDataWidget symbol={ticker} />
            <TechnicalAnalysisWidget symbol={ticker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
