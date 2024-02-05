import React, { useEffect, useRef } from "react";

const TopStoriesWidget = () => {
  const container = useRef();
  const script = useRef();

  useEffect(() => {
    if (!script.current) {
      script.current = document.createElement("script");
      script.current.type = "text/javascript";
      script.current.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.current.async = true;
      script.current.innerHTML = `
        {
          "feedMode": "all_symbols",
          "isTransparent": true,
          "displayMode": "adaptive",
          "width": 400,
          "height": 550,
          "colorTheme": "dark",
          "locale": "en"
        }
      `;

      container.current.innerHTML = "";
      container.current.appendChild(script.current);
    }

    return () => {
      if (script.current && script.current.parentNode === container.current) {
        container.current.removeChild(script.current);
        script.current = null;
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TopStoriesWidget;
