import React, { useEffect, useRef } from 'react';

const FundamentalDataWidget = ({symbol = symbol}) => {
    const container = useRef();
    const script = useRef();

    useEffect(() => {
        if (!script.current) {
            script.current = document.createElement('script');
            script.current.type = 'text/javascript';
            script.current.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
            script.current.async = true;
            script.current.innerHTML = `
                {
                    "isTransparent": true,
                    "largeChartUrl": "",
                    "displayMode": "regular",
                    "width": 480,
                    "height": 830,
                    "colorTheme": "dark",
                    "symbol": "${symbol}",
                    "locale": "en"
                }
            `;

            container.current.innerHTML = '';
            container.current.appendChild(script.current);
        }

        return () => {
            if (script.current && script.current.parentNode === document.body) {
                document.body.removeChild(script.current);
                script.current = null;
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                    <span className="blue-text">Track all markets on TradingView</span>
                </a>
            </div>
        </div>
    );
};

export default FundamentalDataWidget;
