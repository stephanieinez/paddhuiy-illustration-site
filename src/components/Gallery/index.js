import React from 'react';
import { galleryItems } from './constants';
import './gallery.css';

// onClick is a native event and can only be used on actual HTML tags
// https://reactjs.org/docs/handling-events.html & synthetic events

const Gallery = ({ galleryImages, onClick }) => (
  <div className="gallery-container">
    {galleryImages.map(image => (
      <img // eslint-disable-line
        src={image.fields.file.url}
        alt=""
        key={image.sys.id}
        className="gallery-image"
        onClick={onClick(image.fields.file.url)}
      />
    ))}
  </div>
);

Gallery.defaultProps = {
  items: galleryItems,
};

export default Gallery;
