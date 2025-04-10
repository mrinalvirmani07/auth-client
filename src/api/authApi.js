import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://auth-service-jo7q.onrender.com/api',
});

export default authApi;
