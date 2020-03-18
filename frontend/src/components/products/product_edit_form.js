import React from 'react';
import ProductCreateForm from './product_create_form';
import { withRouter } from 'react-router-dom';

class ProductEditForm extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }

  render() {
    let { product, formType, processForm } = this.props;
    if (!product) return null;

    return (
      <ProductCreateForm
        product = {product}
        formType = {formType}
        processForm = {processForm}
      />
    );
  }

}

export default withRouter(ProductEditForm);