import {connect} from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts} from '../../actions/product_actions';

const mapStateToProps = state => {
    return {
        user: state.session.user.username,
        isAdmin: state.session.user.isAdmin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile);