import axios from 'axios';

const REACT_APP_YOUTUBEKEY = 'AIzaSyBz5gQ5GfYNqfsXMkI71ohJ5ntlNDyL53s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: REACT_APP_YOUTUBEKEY,
  },
  headers: {
    'Cache-Control': 'No-Cache',
  },
});
