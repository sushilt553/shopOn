import axios from 'axios';

export const createProduct = productData => {
    return axios.post("/api/products", productData);
};

export const fetchAllProducts = () => {
    return axios.get("/api/products")
}