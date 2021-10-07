import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-container'>
        <form onSubmit={this.onFormSubmit}>
          <div className='search-content'>
            <label htmlFor='search' className='label'>
              Video Search
            </label>
            <input
              placeholder='Type a video name...'
              type='text'
              className='search-bar'
              id='search'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
