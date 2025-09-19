import React from 'react'
import './Service.css'
import ServiceCard from './ServiceCard'
function Services() {
  return (
    <div className='container'>
        <div className="grid-container">
          <ServiceCard img={'../images/logo1.png'} title={'Trading View'} des={'Trade directly in TradingView, the worlds leading charting and social platform.'}/>
          <ServiceCard img={'../images/logo2.png'} title={'Trading View'} des={'Trade directly in TradingView, the worlds leading charting and social platform.'}/>
          <ServiceCard img={'../images/logo3.png'} title={'Trading View'} des={'Trade directly in TradingView, the worlds leading charting and social platform.'}/>
          <ServiceCard img={'../images/logo4.png'} title={'Trading View'} des={'Trade directly in TradingView, the worlds leading charting and social platform.'}/>
          <ServiceCard img={'../images/logo1.png'} title={'Trading View'} des={'Trade directly in TradingView, the worlds leading charting and social platform.'}/>
          <ServiceCard img={'../images/logo2.png'} title={'Trading View'} des={'Trade directly in TradingView, the worlds leading charting and social platform.'}/>
           
        </div>
    </div>
  )
}

export default Services