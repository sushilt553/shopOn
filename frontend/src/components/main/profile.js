import React from 'react';
import {Link} from 'react-router-dom';
import "./profile.css";

class Profile extends React.Component{

    componentDidMount(){
        this.props.fetchAllCategories();
    }

    render (){
        return (
            <div className="profile-head">
                <Link to="/products/new"><button>Create a new Product</button></Link>
                <button className="profile-logout" onClick={this.props.logout}>LOGOUT</button>
                <section className="acc-user">
                    <h1 className="my-account">MY ACCOUNT</h1>
                    <p className="user-username">Welcome back, {this.props.user}!</p>
                </section>
                <Link className="go-shop" to={"/products"}><button>LET'S GO SHOPPING!</button></Link>
                <p className="my-orders">MY ORDERS</p>
            </div>
        )
    }
}

export default Profile;