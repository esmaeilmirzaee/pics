import axios from 'axios';

// client id has beed deleted for the sake of security
export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID',
  },
});
