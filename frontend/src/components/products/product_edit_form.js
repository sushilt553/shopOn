import React from 'react';
import ProductCreateForm from './product_create_form';
import { withRouter } from 'react-router-dom';

class ProductEditForm extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
    this.props.fetchAllCategories();
  }

  render() {
    let { product, formType, processForm } = this.props;
    if (!product) return null;
    const editProduct = {_id: product._id, name: product.name, category: product.category, price: product.price, description: product.description, image_urls: product.image_urls.join(" ")}
    // debugger;
    return (
      <ProductCreateForm
        product = {editProduct}
        formType = {formType}
        processForm = {processForm}
        fetchAllCategories = {this.props.fetchAllCategories}
      />
    );
  }

}

export default withRouter(ProductEditForm);