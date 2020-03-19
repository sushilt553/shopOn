import { connect } from 'react-redux';
import ProductEditForm from './product_edit_form';
import {fetchProduct, updateProduct} from '../../actions/product_actions';
import { fetchAllCategories } from '../../actions/category_actions';

const mSP = (state, ownProps) => {
  const id = ownProps.match.params.id
  let product = state.entities.products[id]
  let category = state.entities.categories[product.category]

  if (category){
    product.category = category.name;
  }
  // debugger;
  return {
    product: product,
    formType: 'Update Your Product'
  }
};

const mDP = dispatch => {
  return {
    processForm: product => dispatch(updateProduct(product)),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    fetchAllCategories: () => dispatch(fetchAllCategories())
  }
};

export default connect(mSP, mDP)(ProductEditForm);