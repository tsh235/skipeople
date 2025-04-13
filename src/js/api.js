import { API_URL } from './const.js';
import {paginationData} from './paginationData.js';

export const getData = async (query) => {
  try {
    const response = await fetch(`${API_URL}goods`);
    const obj = await response.json();

    if (query != '' && query != null) {
      const queryResult = obj.filter(item => String(item.type).toLowerCase().includes(query.toLowerCase()) || String(item.name).toLowerCase().includes(query.toLowerCase()))
      return paginationData(queryResult, 12);
    }

    return paginationData(obj, 12);
  } catch (error) {
    console.log('error: ', error);
  }
}