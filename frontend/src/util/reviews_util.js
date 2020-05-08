import axios from 'axios';

export const fetchAllReviews = () => {
    return axios.get(`/api/reviews`)
}

export const postReview = reviewData => {
    // debugger;
    return axios.post(`/api/reviews`, reviewData)
}

// export const updateReview = reviewData => {
//     return axios.patch(`/api/reviews/${reviewData._id}`, reviewData);
// }

export const deleteReview = reviewId => {
    return axios.delete(`/api/reviews/${reviewId}`);
}
