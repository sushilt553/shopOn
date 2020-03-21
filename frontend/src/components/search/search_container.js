import { connect } from "react-redux";
import Search from "./search";
import { searchProducts } from "../../actions/search_actions";
import { deleteProduct } from "../../actions/product_actions";
import { addToCart } from "../../actions/session_actions";

const mSP = (state, ownProps) => {

    const name = ownProps.match.params.name
  const products = state.entities.searchProducts 

  return {
    products,
    user: state.session.user,
    isAdmin: state.session.user.isAdmin,
    name
  };
};

const mDP = dispatch => {
  return {
    searchProducts: name => dispatch(searchProducts(name)),
    deleteProduct: productId => dispatch(deleteProduct(productId)),
    addToCart: cart => dispatch(addToCart(cart))
  };
};

export default connect(mSP, mDP)(Search);
