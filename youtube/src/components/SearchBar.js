import React, { Component } from 'react';

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
          <div className='search-container__content'>
            <label htmlFor='search' className='content__label'>
              Video Search
            </label>
            <input
              placeholder='Type a video name...'
              type='text'
              className='content__search-bar'
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
