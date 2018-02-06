import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaClose } from 'react-icons/lib/fa';
import './content-block.css';

export class ContentBlock extends Component {
  render() {
    return (
      <div className="content-block-container">
        <div className="content-block-text">
          <p>
            Hi! my name's Paddhuiy. I'm a freelance illustrator based in{' '}
            <strong>Dublin, Ireland</strong>. I make illustrations using a{' '}
            <strong>clean, descriptive line and simple, flat colours</strong>. I
            take elements from<strong> comics,</strong> animation and{' '}
            <strong>fashion illustration </strong> to make drawings that are{' '}
            <strong> stylish, witty, fun </strong>
            and <strong> irreverent</strong> without being facetious or
            tasteless. Perfect for <strong> editorial,</strong>
            <strong>advertising </strong>and <strong>book illustration</strong>,
            though I'm enthusiastic about working in new areas all the time. So,
            if you'd like to <strong> get in touch </strong> then please do- You
            can email me at
            <strong> paddhuiy@gmail.com </strong> or just shoot me a tweet{' '}
            <strong>
              <a href="https://twitter.com/paddhuiy">@paddhuiy</a>{' '}
            </strong>{' '}
            Go on, I like a chat.
          </p>
        </div>
        <img src="/images/AboutAvi.jpg" className="content-image" />
      </div>
    );
  }
}

export default ContentBlock;
