import React from 'react';
import { galleryItems } from './constants';
import './gallery.css';

const Gallery = ({ galleryImages }) => (
  <div className="gallery-container">
    {galleryImages.map(image => (
      <img
        src={image.fields.file.url}
        alt=""
        key={image.sys.id}
        className="gallery-image"
      />
    ))}
  </div>
);

Gallery.defaultProps = {
  items: galleryItems,
};

export default Gallery;
