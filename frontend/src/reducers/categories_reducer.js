import { RECEIVE_ALL_CATEGORIES} from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
    
    let newState = {};

    switch (action.type){
        case RECEIVE_ALL_CATEGORIES:
            action.categories.map(category => newState[category._id] = category);
            return Object.assign({}, state, newState);
        default:
            return state;
    }

}

export default categoriesReducer;