import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: 'https://red-drop-heroes-server.vercel.app'
    // baseURL: 'http://localhost:5000'
}) 

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;