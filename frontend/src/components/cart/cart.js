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
        // debugger;
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

        let totalAmount = 0;
        for (let i = 0; i < this.props.products.length; i++){
            totalAmount = totalAmount + this.props.products[i].price
        }

        // debugger;

        return (
            <ul>
                {products}
                Total amount: $ {totalAmount}
                <br/>
                <button>Place Order</button>
            </ul>
        )
    }
}

export default Cart