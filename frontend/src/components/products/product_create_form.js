import React from 'react';
import {withRouter} from 'react-router-dom';
import './product_create.css';

class ProductCreateForm extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // update(field) {
  //   return e => this.setState({ [field]: e.currentTarget.value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  // }

  render() {
    return(
      <main className="product-create-main">
        <section className="product-form-body">
          <h1>Create a New Product</h1>
          <form className="product-info">
            <label>Product Name:</label>
            <input 
              type="text" 
              value="" 
              placeholder="Product Name" 
              required />
          <br/>
            <label>Price:</label>
            <input 
              type="number" 
              value="" 
              placeholder="Price" 
              required />
          <br/>
            <label>Category:</label>
            <input
              type="text"
              value=""
              placeholder="Category"
              required />
          <br/>
            <label for="product-description">Description:</label>
            <textarea 
              id="product-description" 
              value="" 
              placeholder="Please describe your product in 10 - 140 characters." />
          <br/>
            <button className="create-product-submit">SUBMIT</button>
          </form>
        </section>
      </main>
    )
  }

}

export default withRouter(ProductCreateForm);