import React, { Component } from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
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
        {this.state.videos.length === 0 && (
          <span className='video-count'>
            Please use the searchbar and then press enter
          </span>
        )}
        {this.state.videos.length > 0 && (
          <VideoList videos={this.state.videos} />
        )}
      </div>
    );
  }
}

export default App;
