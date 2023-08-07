import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL = process.env.REACT_APP_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
      const access_token = Cookies.get('access_token');
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default apiClient;