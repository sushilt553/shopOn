import { RECEIVE_ORDER_ITEM } from '../actions/session_actions';

const orderReducer = (state = [], action) => {
    // debugger
    switch (action.type) {
        case RECEIVE_ORDER_ITEM:
            return action.order;
        default:
            return state;
    }
}

export default orderReducer;