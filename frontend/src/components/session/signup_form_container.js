import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { fetchAllCategories } from "../../actions/category_actions";

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    demoLogin: () => dispatch(login({
      username: 'sirdemo',
      password: 'hunter12demo'
    }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
