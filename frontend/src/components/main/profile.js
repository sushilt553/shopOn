import React from 'react';
import {Link} from 'react-router-dom';
import "./profile.css";

class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchAllCategories();
        this.props.fetchAllProducts();
    }

    render (){
        const createProduct = this.props.isAdmin ?
            <Link to="/products/new"><button>Create a new Product</button></Link>
        :
        null;
        debugger;

        // let products = this.props.products.filter(function(product) {
        //     if (product === undefined){
        //         return false;
        //     }
        //     return true
        // }).map((product, idx) =>
        //     <li key={idx}>
        //         {product.name}
        //         <br />
        //         {product.price}
        //         <br />
        //         {product.description}
        //     </li>
        // )

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

export default Profile;