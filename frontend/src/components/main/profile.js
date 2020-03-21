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

        if (this.props.orders.length === 0){
            return null;
        }

        const products = this.props.orders.map((product, idx) => 
        <li key={idx}>
            {product.name}
            <br />
            {product.price}
            <br />
            {product.description}
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
                <p className="my-orders">YOUR RECENT ORDERS</p>
                <ul>
                    {products}
                </ul>
            </div>
        )
    }
}

export default withRouter(Profile);