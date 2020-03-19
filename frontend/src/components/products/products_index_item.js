import React from 'react';
import {Link} from 'react-router-dom';
import './product__index.css';

const ProductIndexItem = (props) => {

    const editDelete = props.isAdmin ? 
      <div className="product-action-btns">
        <Link to={`/products/${props.product._id}/edit`}
          className="edit-btn"
        >Edit
        </Link>
        <button onClick={() => props.deleteProduct(props.product._id)}
          className="delete-btn"
        >Delete
        </button>
      </div>
      :
      null;

    return (
        <div className="product-info-container">
          <Link to={`/products/${props.product._id}`}>
            <div className="product-img">
              <img></img>
            </div>
            <li className="product-info">
              <div className="product-description">
                {props.product.name}
                <br />
                ${props.product.price}
                <br />
                {/* Category: {props.product.category}
                <br /> */}
              </div>
                {editDelete}
              <button className="cart-btn">Add to Cart</button>
            </li>
          </Link>
        </div>
    );
}

export default ProductIndexItem;