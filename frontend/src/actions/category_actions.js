import * as CategoryApiUtil from '../util/categories_util';

export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS';
export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';

export const receiveCategoryProducts = products => {
    return {
        type: RECEIVE_CATEGORY_PRODUCTS,
        products
    }
}

export const receiveAllCategories = categories => {
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
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
    .then(res => dispatch(receiveCategoryProducts(res.data)))
    .catch(err => dispatch(receiveCategoryErrors(err.response.data)))
}

export const fetchAllCategories = () => dispatch => {
    return CategoryApiUtil.fetchAllCategories()
    .then(res => dispatch(receiveAllCategories(res.data)))
    .catch(err => dispatch(receiveCategoryErrors(err.response.data)))
}