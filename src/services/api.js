import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const getClients = () => apiClient.get('/clients');
export default apiClient;