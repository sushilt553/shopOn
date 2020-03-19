import * as CategoryApiUtil from '../util/categories_util';

export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS';
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';

export const receiveCategoryProducts = products => {
    return {
        type: RECEIVE_CATEGORY_PRODUCTS,
        products
    }
}

export const receiveCategoryErrors = errors => {
    return {
        type: RECEIVE_CATEGORY_ERRORS,
        errors
    }
}

export const fetchCategoryProducts = category => dispatch => {
    return CategoryApiUtil.fetchCategoryProducts(category)
    .then(products => dispatch(receiveCategoryProducts(products.data)))
    .catch(err => dispatch(receiveCategoryErrors(err.response.data)))
}