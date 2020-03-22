import React from 'react';
import './cart.css';
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
      this.props.fetchAllProducts();
      // .then(() => this.props.history.push("/products"))
    }

    render(){
        // debugger;

        if (this.props.products.length === 0){
          return null;
        }

        const products = this.props.cart.map((product, idx) => (
          <li key={idx}>
            <div className="cart-image-container">
              <img 
                src={product.image_urls[0]}
                className="cart-image"></img>
            </div>
              <div className="item-info-action">
                <div className="item-info-description">
                  <p className="item-name">
                    {product.name}
                  </p> 
                  <br />
                  <p className="item-price">
                    ${product.price}
                  </p>
                  <br />
                  <p className="item-description">
                    {product.description}
                  </p>
                  <br />
                </div>
                <div className="cart-remove-btn-container">
                  <button
                    onClick={() =>
                      this.props
                      .removeFromCart({userId: this.props.user._id, productId: product._id})
                      // .then(() => this.props.history.push("/products"))
                    }
                    className="cart-remove-btn"
                    >
                    Remove from cart
                  </button>
                </div>
              </div>
          </li>
        ));

        let totalAmount = 0;

        for (let i = 0; i < this.props.cart.length; i++){
            totalAmount = totalAmount + this.props.cart[i].price
        }

        return (
          <div className="items-container">
            <h1 className="cart-header">Your items</h1>
            <div className="items">
              <ul className="list-items">
                  {products}
              </ul>
              <div className="item-purchase-container">
                <p className="items-total"> Total amount: $ {totalAmount} </p>
                <br />
                <div className="purchase-btn-container">
                  <button onClick={this.addToOrder}
                    className="cart-purchase-btn"
                  >Place Order</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Cart