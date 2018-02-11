import React from 'react';
import './content-block.css';

const ContentBlock = ({ content, image, id }) => (
  <div className="content-block-container">
    <div className="content-block-text">{content}</div>
    <img src={image} alt={id} className="content-image" />
  </div>
);

export default ContentBlock;
