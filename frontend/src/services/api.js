import axios from 'axios';

// 🚀 Use Render backend
const API_URL = 'https://instagram-backend-ih9t.onrender.com/api';

const api = axios.create({
    baseURL: API_URL,
});

// 🔐 Include JWT token in every request
api.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
