import React from 'react';
import {Link} from 'react-router-dom';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.addToOrder = this.addToOrder.bind(this);
    }
    // componentDidMount(){
    //     this.props.fetchAllProducts()
    //     this.props.fetchAllCategories()
    // }

    addToOrder(e) {
        e.preventDefault();
        this.props.addToOrder({userId: this.props.user._id, orderProducts: {order: this.props.user.cartProducts}})
        .then(() => this.props.history.push("/profile"))
    }

    render(){

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

        return (
            <ul>
                {products}
                Total amount: $ {totalAmount}
                <br />
                <button onClick={this.addToOrder}>Place Order</button>
            </ul>
        )
    }
}

export default Cart