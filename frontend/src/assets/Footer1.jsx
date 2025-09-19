import React from 'react'
import './Footer1.css'
function Footer1() {
  return (
    <footer className=" text-white pt-5 pb-4 container1">
      <div className="container p-4  container1">
        {/* Top Row: Social Icons, App Download, Markets, Platforms, Education */}
        <div className="row mb-0 p-3 pb-0 border-bottom container1">
          {/* Social Icons Column */}
          <div className="col-lg-2 col-md-4 mb-4 container1">
            <div className="d-flex justify-content-start gap-2 mb-4 container1">
              {/* Replace with actual icon links or use Bootstrap Icons */}
              <a href="#" className="text-white me-2 container1">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-twitter-x fs-5"></i> {/* For X/Twitter */}
              </a>
              <a href="#" className="text-white me-2">
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
            {/* App Download Card */}
            <div className="card bg-dark text-white border p-3 container1">
              <p className="fw-bold mb-2">Download BlackBull SCA App</p>
              <div className="d-flex justify-content-between gap-1 align-items-center">
                <div className='bg-dark '>
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" // Replace with actual Google Play badge
                      alt="Get it on Google Play"
                      className="img-fluid mb-2"
                      style={{ height: '40px' }}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" // Replace with actual App Store badge
                      alt="Download on the App Store"
                      className="img-fluid"
                      style={{ height: '40px' }}
                    />
                  </a>
                </div>
                <div className='bg-dark rounded rounded-1'>
                  <img
                    src="../public/images/QR code.jpeg" // Replace with actual QR Code image
                    alt="QR Code"
                    className="img-fluid bg "
                    style={{ maxHeight: '80px', maxWidth: '80px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Markets Column */}
          <div className="col-lg-2 col-md-4 offset-lg-1 mb-4 container1">
            <h3 className="fw-bold mb-3 container1">Markets</h3>
            <ul className="list-unstyled container1">
              <li><a href="#" className="text-white-50 text-decoration-none">Markets Overview</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Forex</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Shares</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Commodities</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Futures</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Indices</a></li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div className="col-lg-3 col-md-4 mb-4 container1">
            <h3 className="fw-bold mb-3">Platforms</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">TradingView</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">cTrader</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">MetaTrader 5</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">MetaTrader 4</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">MetaTrader Web Trader</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">BlackBull CopyTrader</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">BlackBull Invest</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Trading Tools</a></li>
            </ul>
          </div>

          {/* Education Column */}
          <div className="col-lg-3 col-md-4 mb-4 container1">
            <h3 className="fw-bold mb-3">Education</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Education Hub</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Forex Tutorials</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Shares Tutorials</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Commodities Tutorials</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Trading Opportunities</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Economic Calendar</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Demo Trade</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Customer Support, About, Support, Legal */}
        <div className="row  mt-4 container1">
          {/* Customer Support Contacts & Email */}
          <div className="col-lg-3 col-md-6 mb-4 container1">
            <h3 className="fw-bold mb-3">Customer Support Contacts</h3>
            <p className="text-white-50 mb-1">
              WhatsApp Support: <a href="tel:+642109057208" className="text-white-50 text-decoration-none">+64 210 905 7208</a>
            </p>
            <p className="text-white-50 mb-4">
              Support: <a href="tel:+6496585142" className="text-white-50 text-decoration-none">+64 9 658 5142</a>
            </p>

            <h5 className="fw-bold mb-3">Email</h5>
            <p>
              <a href="mailto:support@blackbull.com" className="text-white-50 text-decoration-none">support@blackbull.com</a>
            </p>
          </div>

          {/* About Column */}
          <div className="col-lg-3 col-md-6 mb-4 container1">
            <h3 className="fw-bold mb-3">About</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Account Comparison</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Company News</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Compliance</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Careers</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-lg-3 col-md-6 mb-4 container1">
            <h3 className="fw-bold mb-3">Support</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Platform Support</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Market Support</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Account Support</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-lg-3 col-md-6 mb-4 container1">
            <h3 className="fw-bold mb-3">Legal</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Legal Hub</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Risk Warning</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Client Services Agreement</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Complaints Handling Procedure</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Confidentiality Policy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Conflicts of Interests Policy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Cookie Policy EU</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer1