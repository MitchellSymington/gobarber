import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  // baserURL: 'http://192.168.0.21:3333'
});

export default api;
