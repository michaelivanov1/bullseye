import React, { useEffect, useRef } from "react";
import TickerTapeData from './TickerTapeData.json';

const TickerTapeWidget = () => {
    const scriptRef = useRef(null);

    useEffect(() => {
        // check if the script has already been added to ensure only one ticker tape at a time
        if (!scriptRef.current) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
            script.async = true;
            script.innerHTML = `{
                "symbols": ${JSON.stringify(TickerTapeData.symbols)},
                "showSymbolLogo": ${TickerTapeData.showSymbolLogo},
                "isTransparent": ${TickerTapeData.isTransparent},
                "displayMode": "${TickerTapeData.displayMode}",
                "colorTheme": "${TickerTapeData.colorTheme}",
                "locale": "${TickerTapeData.locale}"
            }`;

            document.getElementById("tradingview-widget-container").appendChild(script);

            // set the ref to the added script to avoid adding it again
            scriptRef.current = script;
        }
    }, [scriptRef]);

    return (
        <div id="tradingview-widget-container" className="bg-black bg-opacity-30 animate__animated animate__fadeInLeft">
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default TickerTapeWidget;
