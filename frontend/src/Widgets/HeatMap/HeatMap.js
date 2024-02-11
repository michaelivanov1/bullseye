// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

const HeatMapWidget = () => {
  const container = useRef();
  const script = useRef();

  useEffect(() => {
    if (!script.current) {
      script.current = document.createElement("script");
      script.current.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
      script.current.type = "text/javascript";
      script.current.async = true;
      script.current.innerHTML = `
        {
          "exchanges": [],
          "dataSource": "SPX500",
          "grouping": "sector",
          "blockSize": "market_cap_basic",
          "blockColor": "change",
          "locale": "en",
          "symbolUrl": "",
          "colorTheme": "dark",
          "hasTopBar": false,
          "isDataSetEnabled": false,
          "isZoomEnabled": true,
          "hasSymbolTooltip": true,
          "width": "100%",
          "height": "100%"
        }`;
      container.current.innerHTML = "";
      container.current.appendChild(script.current);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default memo(HeatMapWidget);
