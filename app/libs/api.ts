import httpClient from 'http-client-fetch';

export const api = httpClient.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  console.log('Request Interceptor:', config);
  return config;
});

api.interceptors.response.use((response) => {
  console.log('Response Interceptor:', response);
  return response;
});
