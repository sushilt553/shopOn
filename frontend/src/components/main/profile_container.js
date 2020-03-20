import {connect} from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts} from '../../actions/product_actions';

const mapStateToProps = state => {
    let orders;
    if (state.entities.products) {
        orders = state.session.user.orderProducts.map(order => state.entities.products[order]);
    }
    
    debugger;
    return {
        user: state.session.user.username,
        isAdmin: state.session.user.isAdmin,
        orders: orders
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