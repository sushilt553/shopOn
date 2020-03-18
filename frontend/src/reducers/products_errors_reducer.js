import {RECEIVE_PRODUCT, RECEIVE_PRODUCT_ERRORS, RECEIVE_ALL_PRODUCTS} from '../actions/product_actions';

const ProductsErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type){
        case RECEIVE_PRODUCT_ERRORS:
            return action.errors
        case RECEIVE_PRODUCT:
            return [];
        case RECEIVE_ALL_PRODUCTS:
            return [];
        default:
            return state;
    }
}

export default ProductsErrorsReducer;