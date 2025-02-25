import axios from 'axios';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';

const refreshToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
        }

        const response = await axios.post(`${BASE_URL}api/token/refresh`, { refresh: refreshToken });

        localStorage.setItem('token', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);

        return response.data.access;
    } catch (error) {
        console.error("Failed to refresh token:", error);
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        toast.error("Session expired. Please log in again.");
        return null;
    }
};

const requestWithRefresh = async (method, url, data = null) => {
    try {
        let token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }

        const response = await axios[method](BASE_URL + url, data);
        return response;
    } catch (error) {
        if (error.response?.status === 401 && localStorage.getItem('refreshToken')) {
            console.log("Access token expired. Attempting refresh...");

            const newAccessToken = await refreshToken();

            if (newAccessToken) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                return axios[method](BASE_URL + url, data);
            }
        }

        console.error("API Request Error:", error);
        toast.error(error?.response?.data?.error || "Error occurred");
        return Promise.reject(error);
    }
};

export const apiPost = (url, data) => requestWithRefresh("post", url, data);
export const apiPut = (url, data) => requestWithRefresh("put", url, data);
export const apiGet = (url) => requestWithRefresh("get", url);
export const apiDel = (url) => requestWithRefresh("delete", url);

