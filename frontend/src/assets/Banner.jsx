import React from 'react'
import './banner.css'
function Banner() {
  return (
    <div className="why-container">
      <div className="why-wrapper">
        {/* 🔹 Top Div - Image */}
        <div className="why-top">
          <img src="../public/images/banner1.png" width={'1200px'} height={'496px'} alt="Team" />
        </div>

        {/* 🔹 Lower Div - Content */}
        <div className="why-lower">
          {/* Left Div */}
          <div className="why-left">
            <h2>
              Why <span>Market.Trad?</span>
            </h2>
          </div>

          {/* Right Div */}
          <div className="why-right">
            <p>
              Market.Trad delivers an institutional-grade trading experience
              with spreads from 0.0 pips, leverage up to 1:500, 26,000+
              instruments, and 24/7 support — all with no minimum deposit. 
              Client funds are secured in segregated accounts, while Equinix 
              servers in NY, London, and Tokyo ensure ultra-fast market access.
            </p>
            <div className="why-logo">
              {/* <img src="../public/images/logo.png" alt="Market Trad" /> */}
              {/* <span>Market.trad</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner