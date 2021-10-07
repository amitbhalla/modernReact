import { Component } from 'react';

import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

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
          <span>Found: {this.state.images.length} image(s)</span>
        </div>
      </div>
    );
  }
}

export default App;
