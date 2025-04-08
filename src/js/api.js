import { API_URL } from './const.js';

export const getData = async () => {
  const response = await fetch(`${API_URL}goods`);
  const obj = await response.json();
  return obj;
}