import React from "react";
import {Link} from 'react-router-dom';

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Shopon</h1>
        <Link to={`/login`}>Login</Link>
        <br />
        <Link to={`/signup`}>Signup</Link>
        <footer>Copyright &copy; 2020 Shopon</footer>
      </div>
    );
  }
}

export default SplashPage;
