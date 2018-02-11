import React from 'react';
import marked from 'marked';
import './content-block.css';

const ContentBlock = ({ content, image }) => {
  const body = marked(content);
  return (
    <div className="content-block-container">
      <div
        className="content-block-text"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <img src={image} alt="" className="content-image" />
    </div>
  );
};

export default ContentBlock;
