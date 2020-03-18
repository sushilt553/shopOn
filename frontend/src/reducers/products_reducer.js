import {RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT} from '../actions/product_actions';

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            action.products.map(product => newState[product.id] = product);
            return Object.assign({}, state, newState);
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {[action.product.id]: action.product});
        default:
            return state;
    }
}

export default productsReducer;