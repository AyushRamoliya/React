import React from "react";


export default function Section() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-text">
          <h2>Welcome to My Portfolio</h2>
          <p>
            I am a passionate developer skilled in creating responsive and user-friendly websites. Explore my projects to see what I can do!
          </p>
          <a href="#projects" className="portfolio-btn">View Projects</a>
        </div>
        <div className="portfolio-image">
          <img
            src="https://via.placeholder.com/400x300"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
