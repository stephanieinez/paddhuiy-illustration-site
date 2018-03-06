import React from 'react';
import PropTypes from 'prop-types';
import './gallery.css';

const Gallery = ({ galleryImages, onClick }) => (
  <div className="gallery-container">
    {galleryImages.map((image, index) => (
      <img // eslint-disable-line
        src={image.fields.file.url}
        alt="Gallery image"
        key={image.sys.id}
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
