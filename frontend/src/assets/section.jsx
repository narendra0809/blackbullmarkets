import React from 'react'
import './section.css'
import Assets from './Assets'
import TradingPlatform from './TradingPlatform'
import TabelData from './TabelData'
import Banner from './Banner'
import Services from './Services'
import Chart from './Chart'
import Platform from './Platform'
import Education from './Education'
import Payment from './Payment'
import StartTrading from './StartTrading'
import Footer from './Footer'

function Section() {
  return (
    <>
    <section >
      <div className='section-container'>
      <div className='description-container'>
        <h1 className='description'>Trad with lightning fast</h1>
        <h1 className='sub-description'>execution speed</h1>
        <p>Ranked #1 forex broker in execution speed by Compare ForexBrokers.com</p>
      </div>
      <div className='email-cta-container'> {/* This is our main wrapper for the row */}
        <div className='email-input-group'> {/* This groups input and join button */}
          <input type="email" name="email" id="emailbox" className='emailbox' placeholder='|Enter your email...' aria-label="Enter your email" />
          <button className='join-button'>Join Now</button>
        </div>
        <div className='demo'><a href="#" aria-label="Try Demo">or try Demo</a></div>
      </div>
      <div className='image-container'>
        <img src="/images/chart.png" alt="Trading chart showing fast execution speed" className="chart-image" />
      </div>
    
      </div>
        <div className='bottom-section'>
  <div>
    <h2>26K+</h2>
    <p>Tradable Assets</p>
  </div>
  <div>
    <h2>1:500</h2>
    <p>Leverage up to</p>
  </div>
  <div>
    <h2>Regulated</h2>
    <p>Multi-regulated</p>
  </div>
  <div>
    <h2>24/7</h2>
    <p>Client Support</p>
  </div>
  <div>
    <h2>$0</h2>
    <p>No Minimum Deposit</p>
  </div>
</div>

    </section>
    <Assets></Assets>
    <TradingPlatform></TradingPlatform>
    <TabelData></TabelData>
    <Banner></Banner>
    <Services></Services>
    <Chart></Chart>
    <Platform></Platform>
    <Education></Education>
    <Payment></Payment>
    <StartTrading></StartTrading>
    <Footer></Footer>
    </>
  )
}

export default Section