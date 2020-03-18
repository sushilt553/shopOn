import React from 'react';
import {withRouter} from 'react-router-dom';
import './product_create.css';

class ProductCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.product;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(product)
      .then(() => this.props.history.push('/'));
  }

  render() {
    return(
      <main className="product-create-main">
        <section className="product-form-body">
          <h1>Create a New Product</h1>
          <form onSubmit={this.handleSubmit} className="product-info">
            <label>Product Name:</label>
            <input 
              onChange={this.update('name')}
              value={this.state.name}
              type="text" 
              placeholder="Product Name" 
              required />
          <br/>
            <label>Price:</label>
            <input 
              onChange={this.update('price')}
              value={this.state.value}
              type="number" 
              placeholder="Price" 
              required />
          <br/>
            <label>Category:</label>
            <input
              onChange={this.update('category')}
              value={this.state.category}
              type="text"
              placeholder="Category"
              required />
          <br/>
            <label for="product-description">Description:</label>
            <textarea 
              onChange={this.update('description')}
              id="product-description" 
              value="{this.state.description}" 
              placeholder="Please describe your product in 10 - 140 characters." />
          <br/>
            <button type="submit" className="create-product-submit">SUBMIT</button>
          </form>
        </section>
      </main>
    )
  }

}

export default withRouter(ProductCreateForm);