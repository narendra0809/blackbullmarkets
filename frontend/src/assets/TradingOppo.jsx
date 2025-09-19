import React from "react";

function TradingOppo() {
  const posts = [
    {
      id: 1,
      title: "FOMC doves now in the driver’s seat?",
      date: "SEPTEMBER 18, 2025",
      image: "../public/images/banner1.png",
      link: "#",
    },
    {
      id: 2,
      title: "The push for a 50bps Fed cut and its effect on EUR/USD",
      date: "SEPTEMBER 17, 2025",
      image: "../public/images/banner1.png",
      link: "#",
    },
    {
      id: 3,
      title: "Euro shrugs off France’s credit downgrade | FX Research",
      date: "SEPTEMBER 16, 2025",
      image: "../public/images/banner1.png",
      link: "#",
    },
  ];

  return (
    <div className="container  py-5">
      {/* Heading */}
      <h2 className="fw-bold text-primary mb-4">Trading Opportunities</h2>

      {/* Row of Posts */}
      <div className="row g-4">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <div className="card border-0">
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                height={"259px"}
                className="card-img-top "
              />

              {/* Post Content */}
              <div className="card-body px-0">
                <h5 className="fw-bold">{post.title}</h5>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <small className=" text-primary">{post.date}</small>
                  <a href={post.link} className="text-primary px-4 text-decoration-none fw-semibold">
                    VIEW POST
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary   fs-3 fw-semibold">View More</button>
      </div>
    </div>
  );
}

export default TradingOppo;