import React from 'react';
import PropTypes from 'prop-types';
import { FaClose } from 'react-icons/lib/fa';
import './galleryModal.css';

const GalleryModal = ({ onClick, image, nextImage, previousImage }) => (
  <div className="overlay">
    <div style={{ backgroundImage: `url(${image})` }} className="modal-image">
      <FaClose
        size={40}
        color="#ff3c77"
        className="close-modal"
        onClick={onClick}
      />
      <img // eslint-disable-line
        src="/images/Gallery-Arrow-Right.png"
        alt="Next"
        onClick={nextImage}
        className="modal-arrow-right"
      />
      <img // eslint-disable-line
        src="/images/Gallery-Arrow-Left.png"
        alt="Previous"
        onClick={previousImage}
        className="modal-arrow-left"
      />
    </div>
  </div>
);

GalleryModal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  nextImage: PropTypes.func.isRequired,
  previousImage: PropTypes.func.isRequired,
};

export default GalleryModal;
