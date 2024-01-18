import React from 'react';
import TickerOverview from '../../Widgets/TickerOverview/TickerOverview';

const About = ({ aboutSectionRef }) => {
    return (


        <div
            ref={aboutSectionRef}
            className="bg-about-section-image w-full"
            style={{ height: "100vh" }}>
            <h1 className="text-header">d</h1>

            <TickerOverview />

        </div>
    );
};

export default About;