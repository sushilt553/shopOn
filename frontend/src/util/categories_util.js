import axios from 'axios';

export const fetchAllCategories = () => {
    return axios.get("/api/categories")
}

export const fetchCategoryProducts = category => {
    return axios.get(`/api/categories/${category}`)
}