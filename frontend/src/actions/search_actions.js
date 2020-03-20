import * as SearchUtil from '../util/search_util';
export const RECEIVE_SEARCH_PRODUCTS = "RECEIVE_SEARCH_PRODUCTS";

export const receiveSearchProducts = products => {
    return {
        type: RECEIVE_SEARCH_PRODUCTS,
        products
    }
}

export const searchProducts = name => dispatch => (
    SearchUtil.searchProducts(name)
        .then(products => dispatch(receiveSearchProducts(products.data)))
)