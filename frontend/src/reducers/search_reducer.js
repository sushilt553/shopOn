import { RECEIVE_SEARCH_PRODUCTS } from "../actions/search_actions";

const SearchReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_SEARCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default SearchReducer;
