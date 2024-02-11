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
          "isTransparent": false,
          "displayMode": "compact",
          "width": "100%",
          "height": "100%",
          "colorTheme": "dark",
          "locale": "en"
        }
      `;

      script.current.onerror = (error) => {
        console.error("Error loading TradingView script:", error);
      };

      container.current.innerHTML = "";
      container.current.appendChild(script.current);
    }
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
