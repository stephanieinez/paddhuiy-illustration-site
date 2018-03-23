import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer-container">
    <a href="http://paddhuiy.tumblr.com/">
      <img src="/images/TumblrBadge.png" alt="Tumblr" className="social-icon" />
    </a>
    <a href="https://twitter.com/paddhuiy">
      <img
        src="/images/TwitterBadge.png"
        alt="Twitter"
        className="social-icon"
      />
    </a>
    <a href="https://www.instagram.com/paddhuiy/">
      <img
        src="/images/InstaBadge.png"
        alt="Instagram"
        className="social-icon-last-child"
      />
    </a>
    <p>Copyright Paddhuiy Illustration 2018</p>
    <p>
      Site made by{' '}
      <a href="https://stephanieinez.github.io/portfolio">StephanieInez</a>
    </p>
  </div>
);

export default Footer;
