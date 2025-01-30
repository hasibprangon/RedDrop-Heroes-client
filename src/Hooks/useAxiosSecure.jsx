import axios from 'axios';

const axiosSecure = axios.create({
    // baseURL: 'https://red-drop-heroes-server.vercel.app'
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem("access-token");
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;