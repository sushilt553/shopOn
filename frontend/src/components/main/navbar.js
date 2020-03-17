import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';

class Navbar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this)
    // }

    // handleClick(e) {
    //     e.preventDefault();
    //     return <Dropdown />
    // }

    render() {
        const navComponents = this.props.currentUser ? 
        <>
            <button className="nav-logout-link" onClick={this.props.logout}>Logout</button>
        </>
        :
        <>
                <Link className="nav-login-link" to={`/login`}><button>Login</button></Link>
                <Link className="nav-signup-link" to={`/signup`}><button>Signup</button></Link>
        </>

        return (
            <div className="nav-main">
                <section className="nav-comp-1">
                    <Link className="nav-home" to={"/"}>HOME</Link>
                    {/* <Link className="nav-shop">SHOP</Link>  */}
                    {/* <div onClick={this.handleClick}>Categories</div> */}
                    <Dropdown />
                </section>
                <Link to={"/"}><h1 className="nav-header">SHOP-ON</h1></Link>
                <section className="nav-comp-2">
                    <Link className="account" to={"/login"}>ACCOUNT</Link>
                    <Link className="search">SEARCH</Link>
                    <Link className="cart">CART</Link>
                </section>
                {/* <section className="nav-section">
                    {navComponents}
                </section> */}
                
            </div>
        )
    }
}

export default Navbar;