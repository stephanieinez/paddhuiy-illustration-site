import React, { Component } from 'react';
import './footer.css';

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <a href="">
          <img src="/images/InstaBadge.png" className="social-icon" />
        </a>
        <a href="">
          <img src="/images/InstaBadge.png" className="social-icon" />
        </a>
        <a href="">
          <img src="/images/InstaBadge.png" className="social-icon" />
        </a>
        <p>Copyright Paddhuiy Illustration 2018</p>
        <p>
          Site made by{' '}
          <a href="www.github.com/stephanieinez">Stephanie Tassone</a>
        </p>
      </div>
    );
  }
}

export default Footer;
