import { connect } from 'react-redux';
import ProductEditForm from './product_edit_form';

const mSP = (state, ownProps) => {
  return {
    product: ownProps.product,
    formType: 'UPDATE PRODUCT INFO'
  }
};

const mDP = dispatch => {
  return {
    processForm
  }
};

export default connect(mSP, mDP)(ProductEditForm);