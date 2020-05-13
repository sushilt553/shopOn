import { connect } from 'react-redux';
import { fetchProduct, updateProduct, deleteProduct, fetchAllProducts } from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchAllCategories } from '../../actions/category_actions';
import { addToCart } from '../../actions/session_actions';
import { postReview, fetchAllReviews, updateReview, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let findProduct;
  let productId;
  // let reviews = [];
  if (Object.keys(state.entities.products).length > 1) {
    findProduct = state.entities.products[ownProps.match.params.id]
    productId = findProduct._id;
    // reviews = findProduct.reviews.map((review) => state.entities.reviews[review].description);
  }
  let user = null;
  let admin = null;
  let stateUser = {};
  if (state.session.user) {
    user = state.session.user._id
    admin = state.session.user.isAdmin
    stateUser = state.session.user
  } 
  return {
  product: findProduct,
  reviews: state.entities.reviews,
  // reviews: reviews,
  reviewProduct: {description: "", productId: productId, user: user},
  user: stateUser,
  isAdmin: admin
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  updateProduct: updatedProduct => dispatch(updateProduct(updatedProduct)),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  addToCart: (cart) => dispatch(addToCart(cart)),
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  postReview: (review) => dispatch(postReview(review)),
  fetchReviews: () => dispatch(fetchAllReviews()),
  // updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);