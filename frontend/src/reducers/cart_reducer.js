import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../actions/session_actions';

const cartReducer = (state = [], action) => {
    // debugger;
    switch (action.type) {
        case RECEIVE_CART_ITEM:
            if (Array.isArray(action.cart)) {
                return [...state, ...action.cart];
            }else{
                return [...state, action.cart];
            }
        case REMOVE_CART_ITEM:
            let arr = [].concat(state);
            arr.remove(action.item)
            .then(arr => {
                return arr;
            })
        default:
            return state;
    }
}

export default cartReducer;