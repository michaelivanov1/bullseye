import React, { useEffect, useRef, memo } from "react";
import TickerOverviewData from "./TickerOverviewData.json";

function TradingViewWidget() {
  const container = useRef();
  const effectHasRun = useRef(false);

  useEffect(() => {
    if (!effectHasRun.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify(TickerOverviewData);

      container.current.innerHTML = "";
      container.current.appendChild(script);

      effectHasRun.current = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
