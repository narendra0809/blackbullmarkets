import React from 'react'
import './ServiceCard.css'
function ServiceCard(props) {
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
        
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        {props.des}
      </div>
    </div>
  )
}

export default ServiceCard