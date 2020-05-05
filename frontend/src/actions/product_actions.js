import * as ProductApiUtil from '../util/products_util';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const receiveAllProducts = products => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
}

export const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const removeProduct = productId => {
    return {
        type: REMOVE_PRODUCT,
        productId
    }
}

export const receiveProductErrors = errors => {
    return {
        type: RECEIVE_PRODUCT_ERRORS,
        errors
    }
}

export const createProduct = product => dispatch => {
   return ProductApiUtil.createProduct(product)
    .then((res) => dispatch(receiveProduct(res.data)))
    .catch(errors => dispatch(receiveProductErrors(errors.response.data)))
    // .catch(errors => console.log(errors))
}

export const fetchProduct = productId => dispatch => {
    return ProductApiUtil.fetchProduct(productId)
    .then(res => dispatch(receiveProduct(res.data)))
    // .catch(errors => dispatch(receiveProductErrors(errors.response.data)))
}

export const updateProduct = product => dispatch => {
    return ProductApiUtil.updateProduct(product)
    .then(res => dispatch(receiveProduct(res.data)))
    .catch(errors => dispatch(receiveProductErrors(errors.response.data)))
}

export const fetchAllProducts = () => dispatch => {
   return ProductApiUtil.fetchAllProducts()
    .then(res => dispatch(receiveAllProducts(res.data)))
    // .catch(errors => dispatch(receiveProductErrors(errors.response.data)))
}

export const deleteProduct = productId => dispatch => {
    return ProductApiUtil.deleteProduct(productId)
    .then(() => dispatch(removeProduct(productId)))
    // .catch(errors => dispatch(receiveProductErrors(errors.response.data)))
}