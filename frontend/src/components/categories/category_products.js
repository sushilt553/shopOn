import React from 'react';
import ProductIndexItem from '../products/products_index_item';

class CategoryProducts extends React.Component{


    componentDidUpdate(prevProps) {
        const currentCategory = this.props.match.params.category;
        const prevCategory = prevProps.match.params.category;

        if (currentCategory !== prevCategory) {
            this.props.fetchCategoryProducts(currentCategory)
        }
    }

    componentDidMount(){
        this.props.fetchAllCategories();
        this.props.fetchCategoryProducts(this.props.category);
    }

    render(){

        if (!this.props.categoryProducts){
            return null;
        }

        const products = 
            this.props.categoryProducts.map((product) => 
                <ProductIndexItem 
                    key={product._id} 
                    isAdmin={this.props.isAdmin} 
                    product={product}
                    user={this.props.user}
                    addToCart={this.props.addToCart}
                />
            )

        return (
            <ul>
                {products}        
            </ul>
        )
    }
}

export default CategoryProducts;