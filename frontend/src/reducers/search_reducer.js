import { RECEIVE_SEARCH_PRODUCTS} from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_PRODUCTS:
      return Object.assign({}, state, action.products)
    default:
      return state;
  }
}

export default SearchReducer;