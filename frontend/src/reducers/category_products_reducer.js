import {RECEIVE_CATEGORY_PRODUCTS} from '../actions/category_actions';

const categoryProductsReducer = (state = [], action) => {
    
    switch (action.type){
        case RECEIVE_CATEGORY_PRODUCTS:
            return action.products
        default:
            return state;
    }
}

export default categoryProductsReducer;