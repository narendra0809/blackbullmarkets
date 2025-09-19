import React from 'react'
import './TradingCard.css'

function TradingCard(props) {
  return (
    <div className='card'>
      {/* Card Header */}
      <div className="card-header">
        <div className="title-container">
          <img 
            src={props.img}
            alt="Trading View Logo" 
            className="logo" 
          />
          <h4>{props.title}</h4>
        </div>
        <a href='' className='btn-learn'>
          Learn More <span className="arrow">➜</span>
        </a>
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        {props.des}
      </div>
    </div>
  )
}

export default TradingCard
