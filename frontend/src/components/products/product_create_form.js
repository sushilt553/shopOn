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
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/products'));
  }

  render() {
    return(
      <main className="product-create-main">
        <section className="product-form-body">
          <h1>Create a New Product</h1>
          <form onSubmit={this.handleSubmit} className="product-info">
            <label>Product Name:
            <input 
              onChange={this.update('name')}
              value={this.state.name}
              type="text" 
              placeholder="Product Name" 
              required
               />
            </label>
          <br/>
            <label>Price:
            <input 
              onChange={this.update('price')}
              value={this.state.value}
              type="number" 
              placeholder="Price" 
              required
               />
            </label>
          <br/>
            <label>Category:
            <input
              onChange={this.update('category')}
              value={this.state.category}
              type="text"
              placeholder="Category"
              required
               />
            </label>
          <br/>
            <label>Description:
            <textarea 
              onChange={this.update('description')}
              id="product-description" 
              value={this.state.description}
              placeholder="Please describe your product in 10 - 140 characters." />
            </label>
          <br/>
            <button type="submit" className="create-product-submit">SUBMIT</button>
          </form>
        </section>
      </main>
    )
  }

}

export default withRouter(ProductCreateForm);