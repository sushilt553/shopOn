import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './signup_form.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/home');
    }

    this.setState({ errors: nextProps.errors })
  }

  componentDidMount(){
    this.props.fetchAllCategories();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.signup(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    let username = "sirdemo"
    let password = "hunter12demo"

    let user = {
      username,
      password
    };

    this.props.demoLogin(user)
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form className="signup-form-body" onSubmit={this.handleSubmit}>
          <h1>ACCOUNT SIGN UP</h1>
          <p>Please fill in the information below:</p>
          <div className="signup-errors">
            {this.renderErrors()}
          </div>
          <div className="signup-form">
            <br/>
              <input className="signup-info" type = "text"
                value = { this.state.username }
                onChange = { this.update('username') }
                placeholder = "Username"
                required />
            <br/>
              <input className="signup-info" type = "text"
                value = { this.state.email }
                onChange = { this.update('email') }
                placeholder = "Email"
                required />
            <br/>
              <input className="signup-info" type = "password"
                value = { this.state.password }
                onChange = { this.update('password') }
                placeholder = "Password (7 - 30 characters)"
                required />
            <br/>
              <input className="signup-form-submit"
                type = "submit"
                value = "CREATE MY ACCOUNT" />
              <button className="demo-btn" onClick={this.handleDemoSubmit}>
                Demo Login
              </button>
            <span className="signup-lower-message"><Link className="signup-login-link" to={"/login"}>Already have an account? Login</Link></span>
          </div>  
        </form > 
      </div>
    );
  }
}

export default withRouter(SignupForm);