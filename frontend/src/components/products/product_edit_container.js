import { connect } from 'react-redux';
import ProductEditForm from './product_edit_form';
import {fetchProduct, updateProduct} from '../../actions/product_actions';

const mSP = (state, ownProps) => {
  const id = ownProps.match.params.id
  const product = state.entities.products[id]
  // debugger;
  return {
    product: product,
    formType: 'Update Your Product'
  }
};

const mDP = dispatch => {
  return {
    processForm: product => dispatch(updateProduct(product)),
    fetchProduct: productId => dispatch(fetchProduct(productId))
  }
};

export default connect(mSP, mDP)(ProductEditForm);