import { connect } from 'react-redux';
import ProductCreateForm from './product_create_form';
import { createProduct } from '../../actions/product_actions.js';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
  return {
    product: {
      name: '',
      price: '',
      category: '',
      image_urls: '',
      description: ''
    },
    formType: 'Create Your Product'
  }
}

const mapDispatchToProps = dispatch => ({
  processForm: product => dispatch(createProduct(product)),
  fetchAllCategories: () => dispatch(fetchAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreateForm);