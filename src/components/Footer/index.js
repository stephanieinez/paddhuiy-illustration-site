import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer-container">
    <a href="">
      <img
        src="/images/InstaBadge.png"
        alt="Facebook"
        className="social-icon"
      />
    </a>
    <a href="">
      <img src="/images/InstaBadge.png" alt="Twitter" className="social-icon" />
    </a>
    <a href="">
      <img
        src="/images/InstaBadge.png"
        alt="Instagram"
        className="social-icon-last-child"
      />
    </a>
    <p>Copyright Paddhuiy Illustration 2018</p>
    <p>
      Site made by{' '}
      <a href="https://www.github.com/stephanieinez">Stephanie Tassone</a>
    </p>
  </div>
);

export default Footer;
