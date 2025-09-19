import React from 'react'
import './StartTrading.css'
import { FaSearch } from "react-icons/fa";
function StartTrading() {

  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <h1>
          Start trading in less than <span>5 minutes</span>
        </h1>
        <p>with no minimum deposit</p>

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="email" placeholder="Email Address" />
          <button className="join-btn">Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default StartTrading