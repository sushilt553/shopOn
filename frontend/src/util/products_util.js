import axios from 'axios';

export const createProduct = productData => {
    return axios.post("/api/products", productData);
};

export const fetchAllProducts = () => {
    return axios.get("/api/products")
}

export const fetchProduct = productId => {
    return axios.get(`/api/products/${productId}`)
}

export const updateProduct = productData => {
    return axios.patch(`/api/products/${productData._id}`, productData)
}

export const deleteProduct = productId => {
    debugger;
    return axios.delete(`/api/products/${productId}`)
}