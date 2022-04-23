import React from 'react';

class ImageGalleryItem extends React.Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.webformatURL} alt={this.props.tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
