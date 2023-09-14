import axios from 'axios';
import store from "../store";
const BASE_URL = process.env.REACT_APP_URL;

const apiClient = axios.create({
    baseURL: BASE_URL
});

apiClient.interceptors.request.use(async req => {
        const state = store.getState().auth;

        console.log(state.accessToken)

        if (!req.url.includes("refresh")) {
            req.headers.Authorization = `Bearer ${state.accessToken}`
            //req.headers['User-Id'] = state.userId;
        }
        return req
    },
    error => {
        return Promise.reject(error)
    });

export default apiClient;