import React from 'react'

function Spotify() {
  return (
     <section className="container  my-5">
      <div className="row g-6 align-items-center">
        {/* Image Column */}
        <div className="col-lg-6 mb-4 mb-lg-0" >
          <img
            src="../public/images/banner1.png" 
            alt="Man in a recording studio"
            className="img-fluid rounded " 
            height={'800px'}
          />
        </div>

        {/* Text and Button Column */}
        <div className="col-lg-6">
          <h2 className="display-4 fw-bold text-primary mb-4">
            Discover Our Daily Trading Analysis Podcast
          </h2>
          <p className="lead mb-4">
            Join us for our Daily Trading Analysis podcast on Spotify, where we
            break down the latest market trends and provide actionable
            insights. Whether you're a seasoned trader or just starting, our in-
            depth discussions and expert interviews can help you sharpen your
            skills and make informed decisions in your trading journey.
          </p>
          <a
            href="https://spotify.com" // Replace with your Spotify podcast link
            className="btn btn-success btn-lg d-inline-flex align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-spotify me-2"></i> {/* Spotify icon */}
            Listen Now
          </a>
        </div>
      </div>
    </section>
  
  )
}

export default Spotify