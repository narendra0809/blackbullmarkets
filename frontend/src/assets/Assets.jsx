import React from 'react'
import './Assets.css'
import AssetsCard from './AssetsCard'

function Assets() {
  return (
    <div className='assets-container'>
      <div className="assets-heading">
        <h1>Tradable Assets</h1>
      </div>

      <div className="cards-grid">
        <AssetsCard img={'/images/forex.png'} title={'Forex'} des={'70+ major, minor, and exotic currency pairs.'}/>
        <AssetsCard img={'/images/forex.png'} title={'Commodities'} des={'Energies like crude oil, and agricultural cash crops.'}/>
        <AssetsCard img={'/images/forex.png'} title={'Equities'} des={'We offer stocks across 27 global markets like Apple, Alibaba, BMW and Netflix.'}/>
      </div>
      <div className="cards-grid">
          <AssetsCard img={'/images/forex.png'} title={'Indices'} des={'Major stock indices like US30, S&P500, and NAS100.'}/>
        <AssetsCard img={'/images/forex.png'} title={'Metals'} des={'Precious and industry metals like gold, silver, and copper.'}/>
        <AssetsCard img={'/images/forex.png'} title={'View all'} des={'Explore Market. Trade diverse range of tradable assets.'}/>
      </div>
    </div>
  )
}

export default Assets
