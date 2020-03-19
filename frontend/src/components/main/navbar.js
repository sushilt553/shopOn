import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';

class Navbar extends React.Component {

    render() {
        const navComponent = this.props.currentUser ? 
        <Link className="account" to={"/profile"}>ACCOUNT</Link>
        :
        <Link className="account" to={"/login"}>ACCOUNT</Link>

        return (
            <div className="nav-main">
                <section className="nav-comp-1">
                    <Link className="nav-home" to={"/"}>HOME</Link>
                    <Dropdown categories={this.props.categories}/>
                </section>
                <Link to={"/"}><h1 className="nav-header">SHOP-ON</h1></Link>
                <section className="nav-comp-2">
                    {navComponent}
                    <Link className="search" to={"/"}>SEARCH</Link>
                    <Link className="cart" to={"/"}>CART</Link>
                </section>
            </div>
        )
    }
}

export default Navbar;