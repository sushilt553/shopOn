import axios from 'axios';

export const fetchCategoryProducts = category => {
    return axios.get(`/api/categories/${category}`)
}