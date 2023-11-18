import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

instance.interceptors.request.use(
  config => {
    const JWTtoken = localStorage.getItem('Authorization');
    if (JWTtoken) {
      config.headers.Authorization = `Bearer ${JWTtoken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return getNewToken()
        .then(newToken => {
          instance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          return instance(originalRequest);
        })
        .catch(error => {
          console.log('리프레시 토큰 만료!');
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  },
);

function getNewToken() {
  return instance
    .post('/login-check/refresh-token', {
      withCredentials: true,
    })
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('Authorization', response.headers.authorization);
        return response.data;
      } else {
        console.log('실패');
      }
    });
}
