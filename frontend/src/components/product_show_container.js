import { connect } from 'react-redux';
import { updateProduct, deleteProduct } from '../../actions/product_actions';
import ProductShow from './product_show';

const mapDispatchToProps = dispatch => ({
  updateProduct: updatedProduct => dispatch(updateProduct(updatedProduct)),
  deleteProduct: productId => dispatch(deleteProduct(productId))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);