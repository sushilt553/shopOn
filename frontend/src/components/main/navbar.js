import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {

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
                    <Link className="nav-shop">SHOP</Link> 
                </section>
                <h2 className="nav-header">SHOPON</h2>
                <section className="nav-comp-2">
                    <p className="account">ACCOUNT</p>
                    <p className="search">SEARCH</p>
                    <p className="cart">CART</p>
                </section>
                {/* <section className="nav-section">
                    {navComponents}
                </section> */}
                
            </div>
        )
    }
}

export default Navbar;