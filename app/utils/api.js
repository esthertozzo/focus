import axios from "axios";

const api = axios.create({
    baseURL: 'https://6ae7b94056b2ee1e544092f1.mockapi.io',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        console.log('Enviando requisição:', config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log('Resposta recebida:', response.status);
        return response;
    },
    (error) => {
        console.error('Erro na resposta:', error.message);
        return Promise.reject(error);
    }
);

export default api;
