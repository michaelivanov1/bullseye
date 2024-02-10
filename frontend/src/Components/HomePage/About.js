import React from 'react';
import { useState } from 'react';
import TickerOverview from '../../Widgets/TickerOverview/TickerOverview';
import richText1 from '../../images/homepage/about-section/rich-text1.png';
import richText2 from '../../images/homepage/about-section/rich-text2.png';
import FundamentalDataWidget from '../../Widgets/FundamentalData/FundamentalData';
import CompanyProfileWidget from '../../Widgets/CompanyProfile/CompanyProfile';
import financialsRichText from '../../images/homepage/about-section/financials-rich-text.png';
import TechnicalAnalysisWidget from '../../Widgets/TechnicalAnalysis/TechnicalAnalysis';

const About = ({ aboutSectionRef }) => {

    const [ticker, setTicker] = useState('NVDA');

    const handleClick = (newTicker) => {
        setTicker(newTicker);
        console.log('New Ticker:', newTicker);
    };

    return (
        <div
            ref={aboutSectionRef}
            className="bg-about-section-banner w-full">

            <div className="flex h-screen">
                <div className="w-2/5 text-left">
                    <h1 className="text-primary text-2xl mb-4 pl-24 pt-24">Why Bullseye?</h1>
                    <h1 className="text-header text-8xl mb-4 pl-24">Simplify<br />Visualization</h1>
                    <h1 className="text-subheader pl-24">
                        Bullseye features a rich UI with easy access to financials, charts, news, and more market-related data.</h1>

                    <div className="pl-24 pt-20 flex w-10/12">
                        <img className="w-12 h-12" src={richText1} />
                        <div className="flex flex-col">
                            <h1 className="text-header pl-12 text-3xl">Real-Time Updates</h1>
                            <h1 className="text-subheader pl-12 text-sm">Stay ahead of market trends with real-time updates on stock prices, news, and key financial data</h1>
                        </div>
                    </div>

                    <div className="pl-24 pt-8 flex w-10/12">
                        <img className="w-12 h-12" src={richText2} />
                        <div className="flex flex-col">
                            <h1 className="text-header pl-12 text-3xl">Second Opinions</h1>
                            <h1 className="text-subheader pl-12 text-sm">Read what analysts think of companies by viewing Buy, Hold, & Sell recommendations</h1>
                        </div>
                    </div>

                </div>

                <div className="w-3/5 text-left flex p-36">
                    <TickerOverview />
                </div>
            </div>

            <div className="bg-about-section-banner h-screen w-4/5 mx-auto">

                <div className="">
                    <h1 className="text-header text-8xl">Dive Deep</h1>
                    <h1 className="text-subheader text-4xl pt-4">Into company numbers</h1>
                    {/* <h1 className="text-subheader pb-2">View company metrics, price history, dividends, income statements and more</h1> */}
                </div>



                {/* <img src={financialsRichText} /> */}


                <div className="p-12 mt-8 border border-white border-opacity-40 rounded-3xl">
                    <div className="flex items-center pl-4 space-x-4">
                        <button onClick={() => handleClick('NVDA')} className="p-2 mb-8 border border-white border-opacity-20 rounded-lg text-white w-24 hover:scale-110 transition-transform duration-300 ease-in-out">NVDA</button>
                        <button onClick={() => handleClick('TSLA')} className="p-2 mb-8 border border-white border-opacity-20 rounded-lg text-white w-24 hover:scale-110 transition-transform duration-300 ease-in-out">TSLA</button>
                        <button onClick={() => handleClick('MSFT')} className="p-2 mb-8 border border-white border-opacity-20 rounded-lg text-white w-24 hover:scale-110 transition-transform duration-300 ease-in-out">MSFT</button>
                    </div>

                    <div key={ticker} className="flex items-center justify-between">
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