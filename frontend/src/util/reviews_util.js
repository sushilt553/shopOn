import axios from 'axios';

export const fetchAllReviews = () => {
    return axios.get(`/api/reviews`)
}

export const postReview = reviewData => {
    // debugger;
    return axios.post(`/api/reviews`, reviewData)
}