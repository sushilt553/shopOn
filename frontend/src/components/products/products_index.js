import React from 'react';
import ProductIndexItem from './products_index_item';

class ProductsIndex extends React.Component {

    componentDidMount(){
        this.props.fetchAllProducts();
    }

    render(){
        if (!this.props.products){
            return null;
        }

        const products = this.props.products.map(product => 
        <ProductIndexItem 
        key={product._id}
        product={product}
        deleteProduct={this.props.deleteProduct}
        />)

        return(
            <div>
                <h1>PRODUCTS</h1>
                {products}
            </div>
        )
    }
}

export default ProductsIndex;