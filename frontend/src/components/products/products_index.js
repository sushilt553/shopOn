import React from 'react';
import ProductIndexItem from './products_index_item';

class ProductsIndex extends React.Component {

    componentDidMount(){
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