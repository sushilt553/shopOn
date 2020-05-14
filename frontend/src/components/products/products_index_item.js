import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './product__index.css';

class ProductIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(e) {
    e.preventDefault();
    if (Object.keys(this.props.user).length > 0) {
      let cartMsg = document.getElementsByClassName("cart-msg");

      cartMsg[0].classList.add("display-cart-msg");
      setTimeout(() => cartMsg[0].classList.remove("display-cart-msg"), 2000);
      this.props.addToCart({ user: this.props.user._id, product: this.props.product._id })
      
    } else {
      this.props.history.push('/login');
    }
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
    
    let image_urls = '';
    if (this.props.product.image_urls && this.props.product.image_urls.length > 0){
      image_urls = this.props.product.image_urls[0]
    }

    return (
        <div className="product-info-container">
          <Link to={`/products/${this.props.product._id}`}>
            <div className="product-img">
            <img src={image_urls} alt="product"></img>
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
            <button className="cart-btn" onClick={() => this.addItemToCart}>Add to Cart</button>
        </div>
      );
    }
}

export default withRouter(ProductIndexItem);