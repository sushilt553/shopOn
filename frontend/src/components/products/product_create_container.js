import { connect } from 'react-redux';
import ProductCreateForm from './product_create_form';
import { createProduct } from '../../actions/product_actions.js';

const mapStateToProps = state => {
  return {
    product: {
      name: '',
      price: '',
      category: '',
      description: ''
    },
    formType: 'Create Your Product'
  }
}

const mapDispatchToProps = dispatch => ({
  processForm: product => dispatch(createProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreateForm);