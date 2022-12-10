import axios from 'axios';
import { useSelector } from 'react-redux'
import { RootState } from '../store/modules/rootReducer'

const getToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://localhost:7111',
});

api.interceptors.request.use(async (config) => {
  const userData = useSelector((state: RootState) => state?.user)
  const token = getToken();
  const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJHQUJSSUVMQlJVTURBTFVaQEdNQUlMLkNPTSIsImlkIjoxLCJleHAiOjE3MDIxNjk2NTIsImlzcyI6IkRldkVudm9sdmUiLCJhdWQiOiJEZXZFbnZvbHZlIn0.ih1cHR4uQCpqoyhYeklFt3wlyM_iudN8HGPVW6JrPIs'
  if (userData.token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${userData.token}`;
  }
  return config;
});

export default api;
