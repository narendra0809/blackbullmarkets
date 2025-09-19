import React from 'react'
import TradingCard from './TradingCard'
import './TradingPlatform.css'

function TradingPlatform() {
  return (
    <div className='trading-container'>
        <h1>Trading platform</h1>
        <div className='cards'>
         <TradingCard img={'../public/images/logo1.png'} title={'Trading View'} des={'Trade directly in TradingView, the world’s leading charting and social platform.'}/>
        <TradingCard img={'../public/images/logo4.png'} title={'cTrader'} des={'Experience Market.Trad’ institutional trading conditions combined with cTrader.'}/>
        <TradingCard img={'../public/images/logo2.png'} title={'Meta Trader 4'} des={'Trade via MetaTrader 5 (MT5), the most powerful premier trading platform.'}/>
        <TradingCard img={'../public/images/logo3.png'} title={'Meta Trader 5'} des={'Trade directly in TradingView, the world’s leading charting and social platform.'}/>
        <TradingCard img={'../public/images/logo4.png'} title={'Market.Trad copy trader'} des={'Access 26,000+ Shares, Options, ETFs, Bonds and other underlying assets.'}/>
        <TradingCard img={'../public/images/logo1.png'} title={'Market.Trad Invest'} des={'Trade directly in TradingView, the world’s leading charting and social platform.'}/></div>
    </div>
  )
}

export default TradingPlatform