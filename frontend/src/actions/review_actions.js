import * as ReviewApiUtil from '../util/reviews_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveAllReviews = (reviews) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews
    }
}

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviewErrors = errors => {
     return {
         type: RECEIVE_REVIEW_ERRORS,
         errors
     }
 }

 export const removeReview = reviewId => {
     return {
         type: REMOVE_REVIEW,
         reviewId
     }
 }

export const postReview = review => dispatch => {
    return ReviewApiUtil.postReview(review)
    .then((res) => dispatch(receiveReview(res.data)))
    .catch(errors => dispatch(receiveReviewErrors(errors.response.data)))
}

export const fetchAllReviews = () => dispatch => {
    return ReviewApiUtil.fetchAllReviews()
    .then(res => dispatch(receiveAllReviews(res.data)))
}

// export const updateReview = review => dispatch => {
//     return ReviewApiUtil.updateReview(review)
//     .then(res => dispatch(receiveReview(res.data))) 
//     .catch(errors => dispatch(receiveReviewErrors(errors.response.data)))
// }

export const deleteReview = reviewId => dispatch => {
    return ReviewApiUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
}