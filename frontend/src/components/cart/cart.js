import React from 'react';
import './cart.css';
import {Link} from 'react-router-dom';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.addToOrder = this.addToOrder.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
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

    handleRemove(productId) {
      let cartMsg = document.getElementsByClassName("remove-cart-msg");
      // debugger;
      this.props.removeFromCart({ user: this.props.user._id, product: productId})
      .then(cartMsg[0].classList.add("display-remove-cart-msg"))
      .then(setTimeout(() => cartMsg[0].classList.remove("display-remove-cart-msg"), 2000));
    }

    addToOrder(totalAmount) {
    
      return () =>
        this.props.addToOrder({user: this.props.user._id, product: this.props.cart})
        .then(() => this.props.updateReward({userId: this.props.user._id, amount: Number(totalAmount)}))
        .then(() => this.props.history.push("/profile"))
        .then(() => this.props.removeCartItems()) 
    }
    
    componentDidMount() {
      // debugger;
      this.props.fetchAllCategories();
      this.props.fetchAllProducts();
      this.props.getCart(this.props.user._id);
      // .then(() => this.props.history.push("/products"))
    }

    render(){

        if (this.props.products.length === 0){
          return null;
        }
        // debugger;
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
                  onClick={() => this.handleRemove(product._id)}
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
        totalAmount = totalAmount.toFixed(2);

        return (
          <div className="items-container">
            <h1 className="cart-header">Your items</h1>
            <div className="items">
              <ul className="list-items">
                  {products}
              </ul>
              <div className="item-purchase-container">
                <p className="items-total"> Total amount: 
                <span className="dollar-amount"> ${totalAmount} </span> </p>
                <br />
                <div className="purchase-btn-container">
                  <Link to={`/products`}><button className="continue-shopping" >Continue Shopping</button></Link>
                  <br/>
                  <button onClick={this.addToOrder(totalAmount)}
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