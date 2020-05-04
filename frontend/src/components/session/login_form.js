import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./login_form.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/home");
    }
    
    this.setState({ errors: nextProps.errors });
  }

  componentDidMount(){
    this.props.fetchAllCategories();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    let username = "sirdemo"
    let password = "hunter12demo"

    let user = {
      username,
      password
    };

    this.props.login(user)
  }

  renderErrors() {
    return (
      <p className="login-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </p>
    );
  }

  render() {
    return (
        <div className="login-form-container">
          <div className="login-form">
            <div className="login-form-header-container">
              <div className="login-form-header">
                <h1 className="login-form-title">Login</h1>
                <p className="login-form-message">
                  Please enter your username and password
                </p>
                {this.renderErrors()}
              </div>
            </div>
              <form onSubmit={this.handleSubmit}>
                <div className="login-body">
                  <input
                    className="login-form-input"
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Username"
                    required
                  />
                  <br />
                  <input
                    className="login-form-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    required
                  />
                  <br />
                  <input 
                    className="login-form-submit"
                    type="submit" 
                    value="Login" 
                  />
                  <button className="demo-btn" onClick={this.handleDemoSubmit}>
                    Demo Login
                  </button>
                </div>
              </form>
              <div className="login-form-lower-message">
                Don't have an account? <Link className="create-one" to="/signup">Create one</Link>
              </div>
          </div>
        </div>
    );
  }
}

export default withRouter(LoginForm);
