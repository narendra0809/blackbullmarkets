import React from 'react'
import './Platform.css'
function Platform() {
  return (
     <div className="platform-wrapper">
      <div className="platform-buttons">
        <button className="active-btn">Platform 1</button>
        <button className="inactive-btn">Platform 2</button>
      </div>

      <div className="platform-content">
        <div className="platform-text">
          <h1>Free TradingView </h1>         
            <h1 className="highlight">Premium with Markets.Trad</h1>      
          <p>
            Elevate your trading experience with best-in-class charting tools
            and receive TradingView Essential, Plus, or Premium.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>

        <div className="platform-image">
          <img src="../public/images/mobile.png" alt="TradingView Devices" />
        </div>
      </div>
    </div>
  )
}

export default Platform