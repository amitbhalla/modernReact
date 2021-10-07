import { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import './App.css';

const { REACT_APP_UNSPLASHID } = process.env;

class App extends Component {
  onSearchSubmit = (term) => {
    console.log(`Search Term: ${term}`);
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${REACT_APP_UNSPLASHID}`,
      },
    });
  };

  render = () => {
    return (
      <div className='search-box'>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  };
}

export default App;
