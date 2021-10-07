import axios from 'axios';

const { REACT_APP_UNSPLASHID } = process.env;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${REACT_APP_UNSPLASHID}`,
    'Cache-Control': 'No-Cache',
  },
});
