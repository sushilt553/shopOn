import {connect} from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
    return {
        user: state.session.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile);