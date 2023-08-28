import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://mahallu-server.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default Axios;
