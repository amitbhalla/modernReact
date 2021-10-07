import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className='search-container'>
        <div className='search-content'>
          <label htmlFor='search' className='label'>
            Video Search
          </label>
          <input
            placeholder='Type a video name...'
            type='text'
            className='search-bar'
            id='search'
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
