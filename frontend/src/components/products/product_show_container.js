import { connect } from 'react-redux';
import { fetchProduct, updateProduct, deleteProduct, fetchAllProducts } from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchAllCategories } from '../../actions/category_actions';
import { addToCart } from '../../actions/session_actions';
import { postReview, fetchAllReviews } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let findProduct;
  let productId;
  // let reviews = [];
  if (Object.keys(state.entities.products).length > 1) {
    findProduct = state.entities.products[ownProps.match.params.id]
    productId = findProduct._id;
    // reviews = findProduct.reviews.map((review) => state.entities.reviews[review].description);
  }
  return {
  product: findProduct,
  // reviews: reviews,
  reviewProduct: {description: "", productId: productId, user: state.session.user._id},
  user: state.session.user,
  isAdmin: state.session.user.isAdmin
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
  fetchReviews: () => dispatch(fetchAllReviews())
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);