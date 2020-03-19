import axios from 'axios';

export const searchProducts = (searchData) => {
  return axios.get("/api/search", searchData)
}