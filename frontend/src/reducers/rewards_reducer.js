import {RECEIVE_REWARD} from '../actions/session_actions';

const rewardsReducer = (state = 0, action) => {
    switch(action.type) {
        case RECEIVE_REWARD:
            return action.reward;
        default:
            return state;
    }
}

export default rewardsReducer;