import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://localhost:7111',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
