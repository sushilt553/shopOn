import React from 'react';
import {Link} from 'react-router-dom';

const ProductIndexItem = (props) => {

    const editDelete = props.isAdmin ? 
      <> 
        <Link to={`/products/${props.product._id}/edit`}>
          <button className="edit-btn">Edit Product</button>
        </Link>
        <button onClick={() => props.deleteProduct(props.product._id)}>
          Delete
        </button>
      </>
      :
      null;

    return (
      <li key={props.product._id}>
        <Link to={`/products/${props.product._id}`}>
          Name: {props.product.name}
        </Link>
          <br />
          Price: {props.product.price}
          <br />
          Category: {props.product.category}
          <br />
          {editDelete}
          <br />
        </li>
    );
}

export default ProductIndexItem;