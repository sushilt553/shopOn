import React from 'react';
import {Link} from 'react-router-dom';

const ProductIndexItem = (props) => {
    return (
      <Link to={`/products/${props.product._id}`}>
        <li>
          Name: {props.product.name}
          <br />
          Price: {props.product.price}
          <br />
          Category: {props.product.category}
          <br />
          <Link to={`/products/${props.product._id}/edit`}>
            <button className="edit-btn">Edit Product</button>
          </Link>
          <button onClick={() => props.deleteProduct(props.product._id)}>
            Delete
          </button>
          <br />
        </li>
      </Link>
    );
}

export default ProductIndexItem;