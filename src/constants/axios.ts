import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'content-type': 'application/json',
    apikey: `${import.meta.env.VITE_API_KEY}`,
    username: `${import.meta.env.VITE_USERNAME}`,
  },
});
