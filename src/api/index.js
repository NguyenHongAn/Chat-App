import axios from 'axios';
import store from '../store/configStore';

const baseURL = process.env.REACT_APP_APIURL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE",
        "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept,Authorization",
    }
  });

axiosInstance.interceptors.request.use(function (config) {

    const state = store.getState();
    const jwtToken = state.auth.jwtToken;
    if (jwtToken !== "")
    {   
        config.headers["Authorization"] = `Bearer ${jwtToken}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosInstance;