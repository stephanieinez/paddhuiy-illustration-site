import React from 'react';
import PropTypes from 'prop-types';
import { lazyload } from 'react-lazyload';

import './gallery.css';

lazyload({
  height: 200,
  once: true,
  offset: 100,
});

const Gallery = ({ galleryImages, onClick }) => (
  <div className="gallery-container">
    {galleryImages.map((image, index) => (
      <div
        style={{ backgroundImage: `url(${image.fields.file.url})` }}
        alt="Gallery image"
        key={image.sys.id}
        role="link"
        tabIndex={0}
        className="gallery-image"
        onClick={onClick(image.fields.file.url, index)}
      />
    ))}
  </div>
);

Gallery.propTypes = {
  galleryImages: PropTypes.array.isRequired, //eslint-disable-line
  onClick: PropTypes.func.isRequired,
};

export default Gallery;
