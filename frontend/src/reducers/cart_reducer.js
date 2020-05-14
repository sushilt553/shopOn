import { RECEIVE_CART_ITEM, REMOVE_CART_ITEM, RECEIVE_ORDER_ITEM } from '../actions/session_actions';

const cartReducer = (state = [], action) => {
    // debugger;
    switch (action.type) {
        case RECEIVE_CART_ITEM:
            if (Array.isArray(action.cart)) {
                return action.cart;
            }else{
                return [...state, action.cart];
            }
        case REMOVE_CART_ITEM:
            let arr = [].concat(state);
            let index = -1
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].product === action.item) {
                    index = i
                }
            }
            // debugger;
            if (index > -1) {
                arr.splice(index, 1);
            }
            return arr;
        case RECEIVE_ORDER_ITEM:
            return [];
        default:
            return state;
    }
}

export default cartReducer;