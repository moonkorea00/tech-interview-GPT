import axios, { isAxiosError, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openai.com/',
});

instance.interceptors.response.use(
  res => res,
  err => {
    if (isAxiosError(err)) {
      return Promise.reject(
        new AxiosError(
          err.response?.data.error.message || `Unexpected Error ${err.message}`
        )
      );
    }
    return Promise.reject(
      new AxiosError('Something went wrong. Please try again later.')
    );
  }
);

export default instance;
