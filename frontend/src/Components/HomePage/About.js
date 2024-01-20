import React from 'react';
import TickerOverview from '../../Widgets/TickerOverview/TickerOverview';

const About = ({ aboutSectionRef }) => {
    return (


        <div
            ref={aboutSectionRef}
            className="bg-about-section-image w-full h-full"
            style={{ height: "100vh" }}>

            <div className="w-1/3 border border-white h-1/2 pl-48 pt-36 text-left">
                <h1 className="text-primary text-2xl mb-4">Why Bullseye?</h1>
                <h1 className="text-header text-3xl mb-4">Lorem Ipsum<br/>Dummy Text</h1>
                <h1 className="text-subheader">some dummy text here lol some dummy text here lol some dummy text here lol some dummy text here lol some dummy text here lol some dummy text here lol </h1>
            </div>

            {/* <TickerOverview /> */}

        </div>
    );
};

export default About;