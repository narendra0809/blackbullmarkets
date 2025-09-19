import React from 'react'

function TradingPlatform1() {
    const cards = [
    {
      id: 1,
      title: "TradingView",
      desc: "Trade directly in TradingView, the world’s leading charting and social platform.",
      img: "../public/images/logo1.png",
      isNew: true,
    },
    {
      id: 2,
      title: "MetaTrader 4",
      desc: "Trade via MetaTrader 4, the most popular trading platform in the world.",
      img: "../public/images/logo2.png",
      isNew: false,
    },
    {
      id: 3,
      title: "MetaTrader 5",
      desc: "Trade via MetaTrader 5, the most powerful premier trading platform.",
      img: "../public/images/logo3.png",
      isNew: false,
    },
    {
      id: 4,
      title: "cTrader",
      desc: "Experience BlackBull Markets’ institutional trading conditions combined with cTrader.",
      img: "../public/images/logo1.png",
      isNew: true,
    },
    {
      id: 5,
      title: "BlackBull CopyTrader",
      desc: "Copy trades or lead followers with the BlackBull CopyTrader platform.",
      img: "../public/images/logo2.png",
      isNew: true,
    },
    {
      id: 6,
      title: "BlackBull Invest",
      desc: "Access 26,000+ Shares, Options, ETFs, Bonds, and other underlying assets.",
      img: "../public/images/logo3.png",
      isNew: false,
    },
  ];
  return (
    <div className='bg-white  m-3 p-4'>
        <div className=' d-flex h1 fw-bold  bg-white text-primary justify-content-center'><p>Trading Platform</p></div>
        <div className='d-flex flex-wrap bg-white'>
            {
                cards.map((card)=>(
                    <div className=" border-primary  card bg-transparent p-4">
                        <div className="d-flex bg-transparent"><span className="logo"><img src={card.img} alt="" /></span><span className="h2 ms-3 fw-bold">{card.title}</span></div>
                        <div className="h5 bg-transparent"><p>{card.desc}</p></div>
                        <div className='bg-transparent'><button className='btn btn-info text-white'>Learn More</button></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TradingPlatform1