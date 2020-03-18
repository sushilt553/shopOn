import * as ProductApiUtil from '../util/products_util';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveAllProducts = products => {
    debugger;
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products
    }
}

export const receiveProduct = product => {
    debugger;
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const receiveProductErrors = errors => {
    debugger;
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

export const fetchAllProducts = () => dispatch => {
   return ProductApiUtil.fetchAllProducts()
    .then(res => dispatch(receiveAllProducts(res.data)))
    // .catch(errors => dispatch(receiveProductErrors(errors.response.data)))
    // .catch(errors => console.log(errors))
}