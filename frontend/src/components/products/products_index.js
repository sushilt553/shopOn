import React from 'react';
import ProductIndexItem from './products_index_item';
import './product__index.css';

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
            <div className="products-body">
                <h1 className="products-body-header">
                    PRODUCTS
                </h1>
                <div className="products-container">
                    {products}
                </div>
            </div>
        )
    }
}

export default ProductsIndex;