import React from 'react';
import PropTypes from 'prop-types';
import './home-banner.css';

const HomeBanner = ({ homeImage }) => (
  <div className="home-banner-container">
    <img src={homeImage} alt="home" className="home-banner" />
  </div>
);

HomeBanner.propTypes = {
  homeImage: PropTypes.string.isRequired,
};

export default HomeBanner;
