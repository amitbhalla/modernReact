import { Component } from 'react';
import SearchBar from './SearchBar';

import './App.css';

class App extends Component {
  onSearchSubmit = (term) => {
    console.log(`Search Term: ${term}`);
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
