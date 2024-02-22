import React, { useEffect, useRef } from "react";

const StockMarketWidget = () => {
  const container = useRef();
  const script = useRef();

  useEffect(() => {
    if (!script.current) {
      script.current = document.createElement("script");
      script.current.type = "text/javascript";
      script.current.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
      script.current.async = true;
      script.current.innerHTML = `
        {
          "colorTheme": "dark",
          "dateRange": "12M",
          "exchange": "US",
          "showChart": true,
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": false,
          "showFloatingTooltip": false,
          "width": "100%",
          "height": "100%",
          "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
          "plotLineColorFalling": "rgba(41, 98, 255, 1)",
          "gridLineColor": "rgba(240, 243, 250, 0)",
          "scaleFontColor": "rgba(106, 109, 120, 1)",
          "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
          "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
          "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
          "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
        }
      `;

      container.current.innerHTML = "";
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

export default StockMarketWidget;
