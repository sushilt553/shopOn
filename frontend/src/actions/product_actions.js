import * as ProductApiUtil from '../util/products_util';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

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

export const receiveProductErrors = errors => {
    return {
        type: RECEIVE_PRODUCT_ERRORS,
        errors
    }
}

export const createProduct = product => dispatch => {
    ProductApiUtil.createProduct(product)
    .then((product) => dispatch(receiveProduct(product)))
    .fail(errors => dispatch(receiveProductErrors(errors.response.data)))
}

export const fetchAllProducts = () => dispatch => {
    ProductApiUtil.fetchAllProducts()
    .then(products => dispatch(receiveAllProducts(products)))
    .fail(errors => dispatch(receiveProductErrors(errors.response.data)))
}