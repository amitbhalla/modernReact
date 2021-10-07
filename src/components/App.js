import { Component } from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

import './App.css';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='search-box'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className='search-results'>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
