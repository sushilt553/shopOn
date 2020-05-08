import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = {};
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            action.reviews.reviews.map(review => newState[review._id] = review);
            return Object.assign({}, state, newState);
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review._id]: action.review});
        case REMOVE_REVIEW:
            newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;