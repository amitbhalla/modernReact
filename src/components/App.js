import React, { Component } from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  state = { videos: [] };
  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <span className='video-count'>
          Video(s): {this.state.videos.length}
        </span>
      </div>
    );
  }
}

export default App;
