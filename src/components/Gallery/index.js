import React from 'react';
import { galleryItems } from './constants.js';
import './gallery.css';

const Gallery = ({ items }) => (
  <div className="gallery-container">
    {items.map(item => <img src={item.src} className="gallery-image" />)}
  </div>
);

Gallery.defaultProps = {
  items: galleryItems
};

export default Gallery;
