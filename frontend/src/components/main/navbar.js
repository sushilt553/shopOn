import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.keyPressed = this.keyPressed.bind(this);
  }

  updateField(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  keyPressed(e) {
    if (e.key === "Enter") {
      this.props.history.push(`/search/${this.state.name}`);
      this.setState({ name: "" });
    }
  }

  render() {
    const navComponent = this.props.currentUser ? (
      <Link className="account" to={"/profile"}>
        ACCOUNT
      </Link>
    ) : (
      <Link className="account" to={"/login"}>
        ACCOUNT
      </Link>
    );

    return (
      <div className="nav-main">
        <section className="nav-comp-1">
          <Link className="nav-home" to={"/"}>
            HOME
          </Link>
          <Dropdown categories={this.props.categories} />
          <Link className="creators" to={"/creators"}>
            CREATORS
          </Link>
        </section>
        <Link to={"/products"}>
          <h1 className="nav-header">SHOP-ON</h1>
        </Link>
        <section className="nav-comp-2">
          <div className="search">
            <i className="fas fa-search"></i>&nbsp;&nbsp;
            <input
              onKeyPress={this.keyPressed}
              value={this.state.name}
              type="text"
              placeholder="Search..."
              onChange={this.updateField("name")}
            />
          </div>
          {navComponent}
          <Link className="cart" to={"/cart"}>
           ({this.props.numItems}) CART
          </Link>
        </section>
      </div>
    );
  }
}

export default withRouter(Navbar);