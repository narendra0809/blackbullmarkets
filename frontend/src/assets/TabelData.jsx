import React from 'react'
import './TableData.css'
function TabelData() {
  return (
    <div className="comparison-grid">
      {/* Header */}
      <div className="feature-title"><h2>Compare Accounts</h2></div>
      <div className="plan">
         <img src="../public/images/logo1.png" alt="" height={'63px'} weight={'63px'}  />
        <h3>Standard</h3>
        <p>Perfect for beginners</p>
      </div>
      <div className="plan">
        <img src="../public/images/logo2.png" alt="" height={'63px'} weight={'63px'}  />
        <h3>Raw</h3>
        <p>For experienced traders</p>
      </div>
      <div className="plan">
        <img src="../public/images/logo3.png" alt="" height={'63px'} weight={'63px'} />
        <h3>Pro</h3>
        <p>For high-volume traders</p>
      </div>

      {/* Rows */}
      <div className="feature">Spreads (pips)</div>
      <div className='table-data'>From 1.5</div>
      <div className='table-data'>From 0.0</div>
      <div className='table-data'>From 0.6</div>

      <div className="feature">Commission</div>
      <div className='table-data'>No commission</div>
      <div className='table-data'>US$6.00 per lot</div>
      <div className='table-data'>No commission</div>

      <div className="feature">Minimum Deposit</div>
      <div className='table-data'>US$50</div>
      <div className='table-data'>US$100</div>
      <div className='table-data'>US$500</div>

      <div className="feature">Leverage</div>
      <div className='table-data'>Up to 1:500</div>
      <div className='table-data'>Up to 1:500</div>
      <div className='table-data'>Up to 1:500</div>

      <div className="feature"></div>
      <div  className="btn">Open Standard</div>
      <div className="btn">Open Raw</div>
      <div className="btn">Open Pro</div>
    </div>
  )
}

export default TabelData