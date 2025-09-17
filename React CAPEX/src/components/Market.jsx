import React, { useState } from 'react';
import '../styles/Market.css';
import { FiSearch } from 'react-icons/fi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';

const Market = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    Markets: false,
    Platform: false,
    Education: false,
    About: false,
    Support: false,
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="market-wrapper">
      {/* BLUE SECTION */}
      <div className="market-page">
        {/* Top Navbar */}
        <div className="navbar-top">
          <div className="welcome">Welcome to Market.trad</div>
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="top-right">
            <button className="personal-btn">Personal</button>
            <span>Partners</span>
            <span>Research</span>
            <span>Academy</span>
            <select className="lang-select">
              <option>🌐 EN</option>
              <option>🇮🇳 HI</option>
            </select>
          </div>
        </div>

        {/* Bottom Navbar */}
        <div className="navbar-bottom">
          <div className="logo-container">
            <div className="logo">
              <img src="logo.png" alt="Market.trad logo" />
            </div>

            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
              <HiOutlineMenu />
            </button>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li>Quick Start</li>

            {["Markets", "Platform", "Education", "About", "Support"].map((section) => (
              <li className="dropdown" key={section}>
                <div onClick={() => toggleDropdown(section)} className="dropdown-toggle">
                  {section} {dropdowns[section] ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {dropdowns[section] && (
                  <ul className="dropdown-menu">
                    <li>{section} Item 1</li>
                    <li>{section} Item 2</li>
                    <li>{section} Item 3</li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="right-buttons">
            <a href="#" className="refer-link">Refer a friend</a>
            <button className="login-btn">Log in</button>
            <button className="join-btn">Join Now</button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <h1>Markets Overview</h1>
            <p>
              We provide access to diverse markets on all our accounts, offering superior trade execution,
              competitive costs, and a wide range of tradable products. These include 70 currency pairs,
              major market indices and stocks, precious metals like gold and silver, cryptocurrency, and
              commodities such as gas and oil.
            </p>
          </div>
          <div className="hero-right">
            <img src="phone.png" alt="Trading chart" className="mobile-image" />
          </div>
        </section>
      </div>

      {/* STATS SECTION OUTSIDE BLUE BOX */}
      <div className="stats-container">
        <div className="stat-item">
          <h2>26k+</h2>
          <p>Tradable Assets</p>
        </div>
        <div className="stat-item">
          <h2>1:500</h2>
          <p>Leverage up to</p>
        </div>
        <div className="stat-item">
          <h2>Regulated</h2>
          <p>Multi-Regulated</p>
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>Client Support</p>
        </div>
        <div className="stat-item">
          <h2>$0</h2>
          <p>No Minimum Deposit</p>
        </div>
      </div>
      <div className="tradable-assets-section">
  <h2 className="section-title">Tradable Assets</h2>

  <div className="assets-grid">
    {[
      {
        icon: "Frame8415.png",
        title: "Forex",
        desc: "70+ major, minor, and exotic currency pairs.",
      },
      {
        icon: "Frame8416.png",
        title: "Commodities",
        desc: "Energies like crude oil, and agricultural cash crops.",
      },
      {
        icon: "Frame8417.png",
        title: "Equities",
        desc: "We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix.",
      },
      {
        icon: "Frame8418.png",
        title: "Indices",
        desc: "Major stock indices like US30, S&P500, and NAS100.",
      },
      {
        icon: "Frame8419.png",
        title: "Metals",
        desc: "Precious and industry metals like gold, silver, and copper.",
      },
      {
        icon: "Frame8419.png",
        title: "View all",
        desc: "Explore Market.Trad's diverse range of tradable assets.",
      },
    ].map((item, index) => (
      <div className="platform-card" key={index}>
        <div className="icon-placeholder">
          <img src={item.icon} alt={item.title} />
        </div>
        <div className="card-content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
        <a href="#" className="learn-more-btn">Learn More →</a>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default Market;
