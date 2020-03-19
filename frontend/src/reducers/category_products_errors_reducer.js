import {RECEIVE_CATEGORY_PRODUCTS, RECEIVE_CATEGORY_ERRORS} from '../actions/category_actions';

const CategoryProductsErrorsReducer = (state = [], action) => {

    switch (action.type){
        case RECEIVE_CATEGORY_PRODUCTS:
            return [];
        case RECEIVE_CATEGORY_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

export default CategoryProductsErrorsReducer;