import React from 'react'
import './Education.css'
function Education() {
    const videos = [
    "https://www.youtube.com/embed/ogOaYlqSd44", // Main video
    "https://www.youtube.com/embed/ogOaYlqSd44",
    "https://www.youtube.com/embed/ogOaYlqSd44",
    "https://www.youtube.com/embed/ogOaYlqSd44"
];
  return (
    <div className="education-container">
      <div className="header">
        <div>
          <h1>Trading Education</h1>
          <p>
            Watch and Learn with 30+ videos on{" "}
            <span className="yt-text"> YouTube</span>
          </p>
        </div>
        <a href="https://www.youtube.com/">
        <button className="view-btn"  >View All ➜</button>
        </a>
        
      </div>


      {/* Main video */}
      <div className="main-video">
        <iframe
          src={videos[0]}
          title="Main Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Small videos */}
      <div className="video-grid">
        {videos.slice(1).map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              src={video}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education