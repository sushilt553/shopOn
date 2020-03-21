import React from 'react';
import {Link} from 'react-router-dom';
import "./profile.css";
import {withRouter} from 'react-router-dom';

class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchAllCategories();
        this.props.fetchAllProducts()
        // .then(() => this.props.history.push("/products"))
    }

    // componentWillUnmount(){
    //     this.props.history.push("/profile")
    // }

    render (){
        const createProduct = this.props.isAdmin ?
            <Link to="/products/new" className="create-a-product"><button>Create a new Product</button></Link>
        :
        null;
        // debugger;
        
        if (this.props.products.length === 0){
            return null;
        }

        let products;

        if (this.props.orders.length === 0) {
            products = <div>NO RECENT ORDERS</div>
        }else{
            products = this.props.orders.map((product, idx) => 
            <li key={idx}>
                <span className="order-tag-icon">
                    <i className="fas fa-tag"></i>
                </span>
                <span className="order-list-image"><img src={product.image_urls[0]} ></img></span>
                <span className="order-item-details">
                    {product.name} - ${product.price}
                    <br />
                    {product.description}
                    <br />
                </span>
                </li>
            )
        }

        return (
            <div className="profile-head">
                <button className="profile-logout" onClick={this.props.logout}>LOGOUT</button>
                <section className="acc-user">
                    <h1 className="my-account">MY ACCOUNT</h1>
                    <p className="user-username">Welcome back, {this.props.user}!</p>
                </section>
                {createProduct}
                <Link className="go-shop" to={"/products"}><button>LET'S GO SHOPPING!</button></Link>
                <h1 className="reward">REWARD POINTS: {this.props.rewards.toFixed(2)}</h1>
                <p className="my-orders"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;YOUR RECENT ORDERS</p>
                <ul className="orders-list">
                    {products}
                </ul>
            </div>
        )
    }
}

export default withRouter(Profile);