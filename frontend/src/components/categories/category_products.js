import React from 'react';
import ProductIndexItem from '../products/products_index_item';

class CategoryProducts extends React.Component{

    componentDidMount(){
        this.props.fetchCategoryProducts(this.props.category);
    }

    render(){

        if (!this.props.categoryProducts){
            return null;
        }

        const products = this.props.categoryProducts.map((product) => <ProductIndexItem product={product}/>)

        return (
            <ul>
                {products}        
            </ul>
        )
    }
}

export default CategoryProducts;