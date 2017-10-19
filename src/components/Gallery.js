import React, { Component } from 'react';

import ImageOne from 'images/liger1.jpg';
import ImageTwo from 'images/liger2.jpg';
import ImageThree from 'images/liger3.jpg';
import ImageFour from 'images/liger4.jpg';

import styles from './Gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        ImageOne,
        ImageTwo,
        ImageThree,
        ImageFour,
      ],
      currentImage: 0,
    };
  }

  getPrevious = () => {
    if (this.state.currentImage > 0) {
      this.setState({ currentImage: this.state.currentImage - 1 });
    }
  }

  getNext = () => {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({ currentImage: this.state.currentImage + 1 });
    }
  }

  render() {
    const { currentImage, images } = this.state;

    return (
      <div className={ styles.Gallery }>
        <div className={ styles.GalleryImages }>
          <a onClick={ this.getPrevious }>Previous</a>

          <div className={ styles.ImageContainer }>
            <img className={ styles.CurrentImage } src={ images[currentImage] } />
          </div>

          <a onClick={ this.getNext }>Next</a>
        </div>

        <p>
          <span>Click</span>
          <a href='mailto:ligers@example.com'>here</a>
          <span>to submit your own picture!</span>
        </p>
      </div>
    );
  }
}
