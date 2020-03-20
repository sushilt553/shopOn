import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
    demoLogin: () => dispatch(login({
      username: "sirdemo",
      password: "hunter12demo"
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);