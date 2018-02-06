import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaClose } from 'react-icons/lib/fa';
import './home-banner.css';

export class HomeBanner extends Component {
  render() {
    return (
      <div className="home-banner-container">
        <img src="/images/Front-Page-Banner.jpg" className="home-banner" />
      </div>
    );
  }
}

export default HomeBanner;
