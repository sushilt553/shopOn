import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './product__index.css';

class ProductIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e){
    e.preventDefault();
    // debugger;
    this.props.addToCart({ userId: this.props.user._id, cartProducts: { cart: this.props.product._id } })
    .then(() => this.props.history.push("/products"))
  }

  render(){
    const editDelete = this.props.isAdmin ? 
      <div className="product-action-btns">
        <Link to={`/products/${this.props.product._id}/edit`}
          className="edit-btn"
        >Edit
        </Link>
        <button onClick={() => this.props.deleteProduct(this.props.product._id)}
          className="delete-btn"
        >Delete
        </button>
      </div>
      :
      null;

    return (
        <div className="product-info-container">
          <Link to={`/products/${this.props.product._id}`}>
            <div className="product-img">
            <img src={this.props.product.image_urls[0]} ></img>
            </div>
            <li className="product-info">
              <div className="product-description">
                {this.props.product.name}
                <br />
                ${this.props.product.price}
                <br />
                {/* Category: {props.product.category}
                <br /> */}
              </div>
            </li>
          </Link>
            {editDelete}
            <button className="cart-btn" onClick={this.addToCart}>Add to Cart</button>
        </div>
      );
    }
}

export default withRouter(ProductIndexItem);