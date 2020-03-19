import { connect } from 'react-redux';
import SearchResults from './search_results';
import { searchProducts } from '../../actions/search_actions';

const mSP = (state, ownProps) => {
  let products;

  if (state.entities.search.products) {
    products = Object.values(state.entities.search.products);
  } else {
    products = [];
  }

  return {
    products
  }
};

const mDP = dispatch => {
  return {
    searchProducts: products => dispatch(searchProducts(products))
  }
};

export default connect(mSP, mDP)(SearchResults);