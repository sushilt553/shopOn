import React from 'react';

const ProductIndexItem = (props) => {
    return (
        <li>
            Name: {props.product.name}
            Price: {props.product.price}
            Category: {props.product.category}
        </li>
    )
}

export default ProductIndexItem;