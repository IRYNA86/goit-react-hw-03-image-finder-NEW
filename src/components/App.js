import React from 'react';
import Searchbar from 'components/Searchbar';
// import axios from 'axios';
// import * as API from 'services/API';
import { ToastContainer } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import {ImageGallery}  from "components/ImageGallery";
// import {mapper} from 'services/mapper'

const apiKey = '25360661-9d832ca480fd7eb90334f4453';

class App extends React.Component {
  state = {
    hits: [],
    images: '',
    id: '',
    page: 1,
    webformatURL: '',
    largeImageURL: '',
    error: '',
  };
  apiGallery = async e => {
    e.preventDefault();

    const images = e.target.elements.images.value;
    const response = await fetch(
      `https://pixabay.com/api/?q=${images}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const data = await response.json();
    console.log(data);

    this.setState({
      webformatURL: data.hits[0].webformatURL,
      largeImageURL: data.hits.largeImageURL,
      images: data.hits.tags,
      id: data.hits.id,
      error: '',
    });
  };

  render() {
    return (
      <>
        <Searchbar apiGetImages={this.apiGallery} />
        <ImageGalleryItem webformatURL={this.state.webformatURL} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default App;
