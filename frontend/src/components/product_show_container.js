import { connect } from 'react-redux';
import { fetchProduct, updateProduct, deleteProduct } from '../../actions/product_actions';
import ProductShow from './product_show';

const mapStateToProps = (state) => ({
  product: state.entities.products[ownProps.match.param.productId],
  currentUser: state.session.user
})

const mapDispatchToProps = dispatch => ({
  fetchProduct: fetchProduct => dispatch(fetchProduct(productId)),
  updateProduct: updatedProduct => dispatch(updateProduct(updatedProduct)),
  deleteProduct: productId => dispatch(deleteProduct(productId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);