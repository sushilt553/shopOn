import React from 'react';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.addToOrder = this.addToOrder.bind(this);
        // this.removeFromCart = this.removeFromCart.bind(this);
    }
    // componentDidMount(){
    //     this.props.fetchAllProducts()
    //     this.props.fetchAllCategories()
    // }

    // removeFromCart(id){
    //     return () =>
    //     this.props.removeFromCart({userId: this.props.user._id, productId: id})
    //     .then(() => this.props.history.push("/products"))
    // }

    addToOrder(e) {
        e.preventDefault();
        this.props.addToOrder({userId: this.props.user._id, orderProducts: {order: this.props.user.cartProducts}})
        .then(() => this.props.history.push("/profile"))
    }


    componentDidMount() {
      this.props.fetchAllCategories();
      this.props.fetchAllProducts()
      // .then(() => this.props.history.push("/products"))
    }

    render(){
        debugger;
        const products = this.props.products.map((product, idx) => (
          <li key={idx}>
            {product.name}
            <br />${product.price}
            <br />
            {product.description}
            <br />
            <br />
            <button
              onClick={() =>
                this.props
                  .removeFromCart({userId: this.props.user._id, productId: product._id})
                  .then(() => this.props.history.push("/products"))
              }
            >
              Remove from cart
            </button>
          </li>
        ));

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