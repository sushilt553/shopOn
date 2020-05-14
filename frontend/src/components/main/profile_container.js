import {connect} from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts} from '../../actions/product_actions';

const mapStateToProps = state => {
    let orders = [];
    if (Object.values(state.entities.products).length > 0) {
        // orders = state.session.user.orderProducts.map(order => state.entities.products[order]);
    }
    
    return {
        user: state.session.user.username,
        rewards: state.session.user.rewards,
        isAdmin: state.session.user.isAdmin,
        orders: orders,
        products: Object.values(state.entities.products)
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