import axios from 'axios';

export const searchProducts = (name) => {
    return axios.get(`/api/search/${name}`);
}