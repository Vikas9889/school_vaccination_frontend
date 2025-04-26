// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // backend base URL
});

export default instance;
