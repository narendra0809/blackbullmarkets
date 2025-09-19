import React from "react";
import './TradingVideo.css'

function TradingVideo() {
  const videos = [
    {
      id: 1,
      title: "The truth about trading: It's not just the strategy (Feat. Cam Hawkins)",
      date: "5/2/2025",
      url: "https://www.youtube.com/embed/QU65j9eQobc",
      badge: "WEBINAR RECORDING",
    },
    {
      id: 2,
      title: "Tariffs: Trading Threat or Trading Opportunity?",
      date: "4/11/2025",
      url: "https://www.youtube.com/embed/FmKJDOSUAUY",
    },
    {
      id: 3,
      title: "How to reduce forex costs with tighter spreads",
      date: "11/14/2024",
      url: "https://www.youtube.com/embed/QU65j9eQobc",
    },
  ];

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary mb-3 display-4">Trading Video Tutorials</h1>
          <p className="lead text-dark d-flex align-items-center justify-content-center">
            Watch and learn with 3000+ videos on YouTube
            <i className="bi bi-youtube fs-3 text-danger ms-2"></i>
          </p>
        </div>

        <div className="row  justify-content-center border p-2">
          {videos.map((video) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex" key={video.id}>
              <div className=" border-0 shadow-sm h-100 bg-white">
                <div className="position-relative">
                  <iframe
                    width="100%"
                    height="220"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-top"
                  ></iframe>
                  {video.badge && (
                    <span
                      className="position-absolute top-0 start-0 bg-white text-dark small px-2 py-1 m-2 fw-bold"
                      style={{ borderRadius: "3px" }}
                    >
                      {video.badge}
                    </span>
                  )}
                </div>
                <div className="px-2">
                  <h6 className="fw-bold text-dark">{video.title}</h6>
                  <p className="text-secondary mb-0 small">{video.date}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center mt-4">
            <button className="btn btn-outline-primary text-white px-4 py-2">View More Videos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingVideo;