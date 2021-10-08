import React, { Component } from 'react';

import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import './App.css';

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: this.state.videos[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
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
        <div className='videos-container'>
          {this.state.videos.length > 0 && (
            <VideoDetail video={this.state.selectedVideo} />
          )}

          {this.state.videos.length > 0 && (
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          )}
        </div>
        <div className='copy'>React Video Search - Made by Amit</div>
      </div>
    );
  }
}

export default App;
