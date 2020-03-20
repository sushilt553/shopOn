import React from 'react';

class Cart extends React.Component{

    // componentDidMount(){
    //     this.props.fetchAllProducts()
    //     this.props.fetchAllCategories()
    // }

    render(){

        // if (!this.props.products){
        //     return null;
        // }
        debugger;
        const products = this.props.products.map((product, idx) => 
        <li key={idx}>
            {product.name}
            <br/>
            ${product.price}
            <br/>
            {product.description}
            <br/>
            <br/>
        </li>)

        return (
            <ul>
                {products}
            </ul>
        )
    }
}

export default Cart