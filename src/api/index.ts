import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openai.com/',
});

export default instance;
