import React, { useEffect, useRef } from 'react';

const SingleTickerWidget = () => {
  const container = useRef();
  const script = useRef();

  useEffect(() => {
    if (!script.current) {
      script.current = document.createElement('script');
      script.current.type = 'text/javascript';
      script.current.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.current.async = true;
      script.current.innerHTML = `
        {
          "symbol": "NASDAQ:NVDA",
          "width": 350,
          "isTransparent": true,
          "colorTheme": "dark",
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
    </div>
  );
};

export default SingleTickerWidget;
