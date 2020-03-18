import React from 'react';
import ProductCreateForm from './product_create_form';
import { withRouter } from 'react-router-dom';

class ProductEditForm extends React.Component {

  render() {
    let { product, processForm } = this.props;
    if (!product) return null;

    return (
      <ProductCreateForm />
    );
  }

}

export default withRouter(ProductEditForm);