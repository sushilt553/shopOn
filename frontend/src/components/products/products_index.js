import React from 'react';
import ProductIndexItem from './products_index_item';

class ProductsIndex extends React.Component {

    render(){
        if (!this.props.products){
            return null;
        }

        const products = this.props.products.map(product => <ProductIndexItem product={product}/>)

        return(
            <div>
                <h1>PRODUCTS</h1>
                {products}
            </div>
        )
    }
}

export default ProductsIndex;