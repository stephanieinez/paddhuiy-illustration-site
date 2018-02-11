import React from 'react';
import { galleryItems } from './constants';
import './gallery.css';

const Gallery = ({ items }) => (
  <div className="gallery-container">
    {items.map(item => <img src={item.src} alt="" className="gallery-image" />)}
  </div>
);

Gallery.defaultProps = {
  items: galleryItems,
};

export default Gallery;
