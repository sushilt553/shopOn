import React from 'react';
import {withRouter} from 'react-router-dom';

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
      <main>
        <h1>Create a New Product</h1>
        <form>
          <label>Product Name:</label>
          <input type="text" value="" placeholder="Product Name" required/>
          <br/>
          <label>Price:</label>
          <input type="number" value="" placeholder="Product Name" required/>
          <br/>
          <label for="product-description">Description:</label>
          <textarea id="product-description" value="" placeholder="Description (10 - 140 characters)"></textarea>
          <br/>
          <label>Category:</label>
          <input type="text" value="" placeholder="Category" required />
          <button className="create-product-submit">Submit</button>
        </form>
      </main>
    )
  }

}

export default withRouter(ProductCreateForm);