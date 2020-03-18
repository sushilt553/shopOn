import { connect } from 'react-redux';
import ProductEditForm from './product_edit_form';

const mSP = (state, ownProps) => {
  return {
    product: ownProps.product,
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