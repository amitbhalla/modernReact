import React, { Component } from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    console.log(response);
  };

  render() {
    return (
      <div className='App'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
