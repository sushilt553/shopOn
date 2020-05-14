import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.orderProducts
        default:
            return state;
    }
}

export default orderReducer;