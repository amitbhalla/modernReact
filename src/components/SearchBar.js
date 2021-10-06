import { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <form className='search-form'>
        <div className='search-fields'>
          <label htmlFor='search' className='label'>
            Image Search
          </label>
          <input
            type='text'
            placeholder='Search...'
            id='search'
            className='search-bar'
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
