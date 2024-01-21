import React from 'react';
import TickerOverview from '../../Widgets/TickerOverview/TickerOverview';

const About = ({ aboutSectionRef }) => {
    return (
        <div
            ref={aboutSectionRef}
            className="bg-about-section-banner w-full h-screen">

            <div className="flex h-screen">
                <div className="w-2/5 text-left">
                    <h1 className="text-primary text-2xl mb-4 pl-24 pt-24">Why Bullseye?</h1>
                    <h1 className="text-header text-8xl mb-4 pl-24">Simplify<br />Visualization</h1>
                    <h1 className="text-subheader pl-24">Viewing stock market data has never been this straightforward.
                        <br /><br />Bullseye features a rich UI with easy access to financials, charts, news, and more market-related data.</h1>
                </div>

                <div className="w-3/5 text-left flex p-24">
                    <TickerOverview />
                </div>
            </div>

        </div>
    );
};

export default About;