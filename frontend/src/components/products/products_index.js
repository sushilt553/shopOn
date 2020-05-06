import React from 'react';
import ProductIndexItem from './products_index_item';
import './product__index.css';

class ProductsIndex extends React.Component {

    componentDidMount(){
        this.props.fetchReviews();
        this.props.fetchAllProducts();
        this.props.fetchAllCategories();
    }

    render(){
        if (!this.props.products){
            return null;
        }

        const products = this.props.products.map((product, idx) => 
        <ProductIndexItem 
        key={idx}
        product={product}
        isAdmin={this.props.isAdmin}
        deleteProduct={this.props.deleteProduct}
        addToCart={this.props.addToCart}
        user={this.props.user}
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