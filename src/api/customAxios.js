import axios from 'axios';

const jwtToken = localStorage.getItem('Authorization');

const instance = axios.create({
  baseURL: `${process.env.SERVER_URI}`,
  headers: {
    Authorization: `${jwtToken}`,
  },
});

export default instance;
