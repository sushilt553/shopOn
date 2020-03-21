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
            <Link to="/products/new"><button>Create a new Product</button></Link>
        :
        null;
        // debugger;

        if (this.props.products.length === 0){
            return null;
        }

        const products = this.props.orders.map((product, idx) => 
            <li key={idx}>
                <span className="order-tag-icon">
                    <i className="fas fa-tag"></i>
                </span>
                <span className="order-item-details">
                    {product.name} - ${product.price}
                    <br />
                    {product.description}
                    <br />
                </span>
                </li>
            )

        return (
            <div className="profile-head">
                {createProduct}
                <button className="profile-logout" onClick={this.props.logout}>LOGOUT</button>
                <section className="acc-user">
                    <h1 className="my-account">MY ACCOUNT</h1>
                    <p className="user-username">Welcome back, {this.props.user}!</p>
                </section>
                <Link className="go-shop" to={"/products"}><button>LET'S GO SHOPPING!</button></Link>
                <p className="my-orders"><i class="fas fa-shopping-cart"></i>&nbsp;&nbsp;YOUR RECENT ORDERS</p>
                <ul className="orders-list">
                    {products}
                </ul>
            </div>
        )
    }
}

export default withRouter(Profile);