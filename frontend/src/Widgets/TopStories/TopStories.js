import React, { useEffect, useRef } from "react";
import TopStoriesData from "../TopStories/TopStoriesData.json";

const TopStoriesWidget = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    // check if the script has already been added to ensure only one ticker tape at a time
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = `{
                "feedMode": ${TopStoriesData.feedMode},
                "isTransparent": ${TopStoriesData.isTransparent},
                "displayMode": "${TopStoriesData.displayMode}",
                "colorTheme": "${TopStoriesData.colorTheme}",
                "locale": "${TopStoriesData.locale}",
                "width": "${TopStoriesData.width}",
                "height": "${TopStoriesData.height}",

            }`;
      document
        .getElementById("tradingview-widget-container")
        .appendChild(script);

      // set the ref to the added script to avoid adding it again
      scriptRef.current = script;
    }
  }, [scriptRef]);

  return (
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
    </div>
  );
};
export default TopStoriesWidget;
