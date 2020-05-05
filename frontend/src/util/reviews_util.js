import axios from 'axios';

export const fetchAllReviews = () => {
    return axios.get(`/api/reviews`)
}