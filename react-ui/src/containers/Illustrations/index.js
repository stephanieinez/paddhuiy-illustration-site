import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Gallery, GalleryModal } from '../../components';

class Illustrations extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      currentImageUrl: '',
      currentImageIndex: null,
    };
  }

  onOpenModal = (imageUrl, imageIndex) => () => {
    this.setState({
      open: true,
      currentImageUrl: imageUrl,
      currentImageIndex: imageIndex,
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onClickNext = () => {
    const { currentImageIndex } = this.state;
    const nextIndex = currentImageIndex + 1;
    const nextImage = this.props.galleryImages[nextIndex];
    if (nextImage) {
      this.setState({
        currentImageUrl: nextImage.fields.file.url,
        currentImageIndex: nextIndex,
      });
    } else {
      this.setState({
        currentImageUrl: this.props.galleryImages[0].fields.file.url,
        currentImageIndex: 0,
      });
    }
  };

  onClickPrevious = () => {
    const { currentImageIndex } = this.state;
    const prevIndex = currentImageIndex - 1;
    const prevImage = this.props.galleryImages[prevIndex];
    if (prevImage) {
      this.setState({
        currentImageUrl: prevImage.fields.file.url,
        currentImageIndex: prevIndex,
      });
    } else {
      this.setState({
        currentImageUrl: this.props.galleryImages[
          this.props.galleryImages.length - 1
        ].fields.file.url,
        currentImageIndex: this.props.galleryImages.length - 1,
      });
    }
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Gallery
          galleryImages={this.props.galleryImages}
          onClick={this.onOpenModal}
        />
        {open ? (
          <GalleryModal
            image={this.state.currentImageUrl}
            open={open}
            onClick={this.onCloseModal}
            nextImage={this.onClickNext}
            previousImage={this.onClickPrevious}
          />
        ) : null}
      </div>
    );
  }
}

Illustrations.propTypes = {
  galleryImages: PropTypes.array.isRequired, // eslint-disable-line
};

export default Illustrations;
