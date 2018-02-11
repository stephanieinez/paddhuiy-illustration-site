import React from 'react';
import './home-banner.css';

const HomeBanner = ({ homeImage }) => (
  <div className="home-banner-container">
    <img src={homeImage} alt="home" className="home-banner" />
  </div>
);

export default HomeBanner;
