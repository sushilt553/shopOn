import { connect } from 'react-redux';
import { fetchProduct, updateProduct, deleteProduct } from '../../actions/product_actions';
import ProductShow from './product_show';
import { fetchAllCategories } from '../../actions/category_actions';
import { addToCart } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.id],
  user: state.session.user,
  isAdmin: state.session.user.isAdmin
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  updateProduct: updatedProduct => dispatch(updateProduct(updatedProduct)),
  deleteProduct: productId => dispatch(deleteProduct(productId)),
  fetchAllCategories: () => dispatch(fetchAllCategories()),
  addToCart: (cart) => dispatch(addToCart(cart))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);