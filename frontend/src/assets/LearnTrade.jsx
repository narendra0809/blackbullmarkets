import React from 'react';
import './LearnTrade.css';

function LearnTrade() {
  const cardsData = [
    { title: "Forex", desc: "Learn to Trade Forex" },
    { title: "Crypto", desc: "Learn to Trade Crypto" },
    { title: "Commodities", desc: "Learn to Trade Commodities" },
    { title: "Stocks", desc: "Learn to Trade Stocks" },
  ];

  return (
    <div className='bg-light py-5'>
      <div className="container">
        <h1 className='text-primary fw-bold text-center mb-5 display-4'>Learn to Trade Courses</h1>
        <div className='row justify-content-center'>
          {cardsData.map((card, index) => (
            <div className='col-12 col-md-6 col-lg-3 d-flex' key={index}>
              <div className='bg-white p-4 m-2 w-100 shadow-sm'>
                <h2 className='mb-3 fw-bold text-dark'>{card.title}</h2>
                <p className='text-secondary mb-4'>{card.desc}</p>
                <div className='d-flex flex-wrap mt-auto'>
                  <span className='badge bg-primary text-white p-2 m-1'>BEGINNER</span>
                  <span className='badge bg-primary text-white p-2 m-1'>INTERMEDIATE</span>
                  <span className='badge bg-primary text-white p-2 m-1'>PRO</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnTrade;