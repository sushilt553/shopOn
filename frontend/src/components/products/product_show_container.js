import { connect } from 'react-redux';
import { fetchProduct, updateProduct, deleteProduct, fetchAllProducts } from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchAllCategories } from '../../actions/category_actions';
import { addToCart } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  product: state.entities.products[ownProps.match.params.id],
  isAdmin: state.session.user ? state.session.user.isAdmin : false,
  user: state.session.user ? state.session.user : null
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  updateProduct: updatedProduct => dispatch(updateProduct(updatedProduct)),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  addToCart: (cart) => dispatch(addToCart(cart)),
  fetchAllProducts: () => dispatch(fetchAllProducts())
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);