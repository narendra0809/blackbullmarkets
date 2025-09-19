import React from "react";
import "./header.css";
import {FaSearch} from "react-icons/fa" 

function Header() {
  return (
    <header className="header-container">
      
      <div className="upper-header">
        <h4>Welcome to Market.trad</h4>
        <div className="upper-header-right"> <span><FaSearch className="search-icon"></FaSearch></span> 
          <input type="search" placeholder="Search..." aria-label="Search" />
          <nav className="top-nav-wrapper">
            <ul className="top-nav">
              <li className="active">Personal</li>
              <li>Partners</li>
              <li>Research</li>
              <li>Academy</li>
              <li className="lang">🌐 EN ▾</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lower-header">
        <a href="/" className="logo">
          <span className="logo-icon"><img src="../public/images/Layer_1.png" alt="" /></span>
          <span className="logo-text">Market.<b>trad</b></span>
        </a>

        <nav className="main-nav-wrapper">
          <ul className="main-nav">
            <li>Quick Start ▾</li>
            <li>Markets ▾</li>
            <li>Platform ▾</li>
            <li>Education ▾</li>
            <li>About ▾</li>
            <li>Support ▾</li>
          </ul>
        </nav>

        <div className="actions">
          <a href="#" className="refer">Refer a friend</a>
          <button className="btn login">Log in</button>
          <button className=" text-white btn join">Join Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;