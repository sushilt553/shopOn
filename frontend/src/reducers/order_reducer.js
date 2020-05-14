import { RECEIVE_ORDER_ITEM } from '../actions/session_actions';

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ORDER_ITEM:
            if (Array.isArray(action.order)) {
                return action.order;
            }else{
                return [...state, action.order]
            }
        default:
            return state;
    }
}

export default cartReducer;