import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = getCookieValue('access_token');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

function getCookieValue(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

export default api;