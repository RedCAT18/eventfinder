import React from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

axios.interceptors.request.use(
  request => {
    request.headers = request.headers || {};

    console.log(request);
    let token = AsyncStorage.getItem('token');
    if (token) {
      request.headers.set('Authentication', 'Bearer' + token);
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 10000
});

export { api };
