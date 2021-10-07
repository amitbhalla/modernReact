import { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render = () => {
    return (
      <form className='search-form' onSubmit={this.onFormSubmit}>
        <div className='search-fields'>
          <label htmlFor='search' className='label'>
            Image Search
          </label>
          <input
            type='text'
            placeholder='Search...'
            id='search'
            className='search-bar'
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </div>
      </form>
    );
  };
}

export default SearchBar;
