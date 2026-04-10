import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-page-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="badge">Welcome to Book Store</span>
          <h1>Your Gateway to Infinite Words</h1>
          <p>
            Discover, read, and immerse yourself in the largest curated collection of books from around the globe.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="about-details">
        <div className="container">
          <div className="details-grid">
            
            {/* Mission Card */}
            <div className="detail-card glass-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To foster a global community of readers by providing a seamless, diverse, and enriching platform where every book lover can find their next grand adventure.
              </p>
            </div>

            {/* Vision Card */}
            <div className="detail-card glass-card">
              <div className="card-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                A world where the joy of reading is accessible to all, breaking barriers and expanding minds through the magic of storytelling and knowledge.
              </p>
            </div>

            {/* Values Card */}
            <div className="detail-card glass-card">
              <div className="card-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Quality, Diversity, Accessibility, and Community. We stand by curating the best titles while supporting authors and readers alike in their literary journeys.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="about-stats glass-panel">
        <div className="stat-item">
          <h2>10k+</h2>
          <p>Books Available</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>5k+</h2>
          <p>Happy Readers</p>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <h2>50+</h2>
          <p>Genres Explored</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
