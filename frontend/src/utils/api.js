import { create } from 'apisauce';

const baseUrl = 'http://localhost:9000';

const api = create({
  baseURL: `${baseUrl}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});

export const getPhones = () => api.get('/phones');
