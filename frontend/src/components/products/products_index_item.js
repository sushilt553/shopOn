import React from 'react';

const ProductIndexItem = (props) => {
    return (
        <li>
            Name: {props.product.name}
            <br/>
            Price: {props.product.price}
            <br/>
            Category: {props.product.category}
            <br/>
            <button onClick={() => props.deleteProduct(props.product._id)}>Delete</button>
            <br />
        </li>
    )
}

export default ProductIndexItem;