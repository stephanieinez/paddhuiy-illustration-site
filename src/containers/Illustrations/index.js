import React, { Component } from 'react';
import { Gallery, GalleryModal } from '../../components';

// image click triggers event
// design modal

// 1. pass the result of image which is in openModal to the gallery modal
//   - We pass data to our components via defaultProps
// We need a image prop for GalleryModal
//

class Illustrations extends Component {
  constructor() {
    super();
    // TODO: Learn difference between state and props
    // learn state
    this.state = {
      open: false,
    };
  }

  // image: string
  // TODO: Study currying/partial application.
  // Were are configuring the func with same data with the 1st call.
  onOpenModal = image => () => {
    this.setState({ open: true, image }); // why is setState used and not state.open = true?
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    console.log('state', this.props.galleryImages);
    return (
      <div>
        <Gallery
          galleryImages={this.props.galleryImages}
          onClick={this.onOpenModal}
        />
        {open ? (
          <GalleryModal
            image={this.state.image}
            open={open}
            onClick={this.onCloseModal}
          />
        ) : null}
      </div>
    );
  }
}

export default Illustrations;
