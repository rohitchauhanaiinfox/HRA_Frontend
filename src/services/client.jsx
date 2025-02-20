import axios from 'axios';
import { BASE_URL } from '../config';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const apiPost = async (url, data) => {
    try {
        const token = localStorage.getItem('token')
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        const response = await axios.post(BASE_URL + url, data);
        return response;
    } catch (error) {
        console.log("inner");
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            delete axios.defaults.headers.common['Authorization'];
        }
        console.log(error?.response?.data?.error);
        return toast.error(error?.response?.data?.error);
    }
}

export const apiGet = async (url) => {
    try {
        const token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get(BASE_URL + url);
        return response;
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            delete axios.defaults.headers.common['Authorization'];
        }
        return toast.error(error?.response?.data?.error);
    }
}

export const apiDel = async (url) => {
    try {
        const token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = `${token}`;
        const response = await axios.delete(BASE_URL + url);
        return response;
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            delete axios.defaults.headers.common['Authorization'];
        }
        return toast.error(error?.response?.data?.error);
    }
}