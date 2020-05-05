import {RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT} from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            action.products.map(product => newState[product._id] = product);
            return Object.assign({}, state, newState);
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {[action.product.product._id]: action.product.product});
        case REMOVE_PRODUCT:
            newState = Object.assign({}, state);
            delete newState[action.productId];
            return newState;
        default:
            return state;
    }
}

export default productsReducer;