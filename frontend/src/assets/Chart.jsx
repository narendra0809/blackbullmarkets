import React from 'react'
import './Chart.css'
function Chart() {
    const brokers = [
    { name: "Market.Trad", value: 50, color: "#003087", label: true },
    { name: "Pepperstone", value: 55 },
    { name: "Fusion Markets", value: 58 },
    { name: "Axi", value: 70 },
    { name: "TMGM", value: 75 },
    { name: "FXCM", value: 88 },
    { name: "Admiral Markets", value: 108 },
    { name: "IC Markets", value: 112 },
    { name: "CMC Markets", value: 116 },
    { name: "IG", value: 125 },
  ];
  return (
          <div className="main-wrapper">
      <div className="content-container">
        {/* LEFT: Chart Image */}
        <div className="left-section">
          <img src='../public/images/candels.png' alt="Chart" className="chart-image" />
        </div>

        {/* RIGHT: Text content */}
        <div className="right-section">
          <h1 className="heading">Best in class<br />execution speed</h1>
          <p className="paragraph">
            Research by CompareForexBrokers.com revealed that Markets.Trad
            achieved average execution speeds of less than 75 milliseconds.
            With speeds under 100 milliseconds, traders have a better chance of
            avoiding slippage and getting the price they desire for their order.
          </p>
          <button className="cta-button">Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Chart