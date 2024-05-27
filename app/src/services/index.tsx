import axios from 'axios';

const api = (baseUrl?: string) =>
  axios.create({
    baseURL: baseUrl || process.env.REACT_APP_BASE_URL,
    headers: {
      'content-type': 'applications/json',
      accept: '/',
      'Cache-Control': 'no-cache',
    },
  });

export default api;
