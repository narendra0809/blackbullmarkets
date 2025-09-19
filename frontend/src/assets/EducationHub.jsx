import React from 'react';
// import "./EducationHub.css";
import LearnTrade from './LearnTrade';
import TradingPlatform1 from './TradingPlatform1';
import TradingVideo from './TradingVideo';
import TradingOppo from './TradingOppo';
import PastWebinar from './PastWebinar';
import Spotify from './Spotify';
import Payment1 from './Payment1';
import Footer1 from './Footer1';
import Webinars from './Webinars';
import BeginnerForex from './BeginnerForex';

function EducationHub() {
    return (
        <>
       <div className="education-section d-flex align-items-center text-white" style={{ backgroundImage: "url('/images/EducationHub.png')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '80vh' }}>
      <div className="container bg-transparent"> {/* Use a Bootstrap container for consistent max-width */}
        <div className="row bg-transparent">
          <div className="col-12 col-lg-6 bg-transparent"> {/* Content box takes full width on small/medium, half on large */}
            <div className="content-box p-4 p-md-5 bg-transparent"> {/* Add responsive padding */}
              <h1 className="fw-bold text-white text-start mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>Education Hub</h1> {/* mb-3 for spacing */}
              <h6 className="mb-4 fs-5 text-white" style={{ fontFamily: 'Arial, sans-serif' }}> {/* text-dark or text-white depending on background contrast */}
                Learn to trade forex, crypto, commodities, and shares,
                with our trading tutorials. Explore trading videos,
                podcasts, webinars, and market analysis.
              </h6>
              <button className="btn btn-primary btn-lg fw-bold">Demo Trade</button> {/* btn-lg for a larger button */}
            </div>
          </div>
        </div>
      </div>
    </div>

        <LearnTrade></LearnTrade>
        <TradingPlatform1></TradingPlatform1>
        <TradingVideo></TradingVideo>
        <TradingOppo></TradingOppo>
        <PastWebinar></PastWebinar>
        <Spotify></Spotify>
        {/* <Webinars></Webinars> */}
        <BeginnerForex></BeginnerForex>
        <Payment1></Payment1>
        <Footer1></Footer1>
        </>
    );
}

export default EducationHub;
