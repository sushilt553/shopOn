import { RECEIVE_ORDER_ITEM } from '../actions/session_actions';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ORDER_ITEM:
            return [...state, action.order]
        default:
            return state;
    }
}

export default cartReducer;