import React from 'react';

const ProductIndexItem = (props) => {
    return (
        <li>
            Name: {props.product.name}
            <br/>
            Price: {props.product.price}
            <br/>
            Category: {props.product.category}
        </li>
    )
}

export default ProductIndexItem;