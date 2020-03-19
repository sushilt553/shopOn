import React from 'react';
import {Link} from 'react-router-dom';
import './product__index.css';

const ProductIndexItem = (props) => {
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
              <div className="product-action-btns">
                <Link to={`/products/${props.product._id}/edit`}
                  className="edit-btn"
                >
                  Edit
                  {/* <button>Edit</button> */}
                </Link>
                <button onClick={() => props.deleteProduct(props.product._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
              <button className="cart-btn">Add to Cart</button>
            </li>
          </Link>
        </div>
    );
}

export default ProductIndexItem;