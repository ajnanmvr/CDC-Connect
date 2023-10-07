import axios from 'axios';


const Axios = axios.create({
  baseURL: 'https://mahallu-server.vercel.app/api',
  // baseURL: 'http://192.168.1.120:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default Axios;
