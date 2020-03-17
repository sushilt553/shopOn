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
                <h2 className="nav-header">Shopon</h2>
                <section className="nav-section">
                    {navComponents}
                </section>
                
            </div>
        )
    }
}

export default Navbar;