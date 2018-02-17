import React from 'react';
import { FaClose } from 'react-icons/lib/fa';
import './galleryModal.css';

const GalleryModal = ({ onClick, image }) => (
  <div className="overlay">
    <div className="modal-container">
      <img src={image} alt="" className="modal-image" />
      <FaClose
        size={30}
        color="#ff3c77"
        className="close-modal"
        onClick={onClick}
      />
      <img
        src="/images/Gallery-Arrow-Right.png"
        alt="Next"
        className="modal-arrow-right"
      />
      <img
        src="/images/Gallery-Arrow-Left.png"
        alt="Previous"
        className="modal-arrow-left"
      />
    </div>
  </div>
);

export default GalleryModal;
