import {connect} from 'react-redux';
import Profile from './profile';
import { logout, getOrder, getReward } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts} from '../../actions/product_actions';

const mapStateToProps = state => {
    let orders = [];
    if (Object.values(state.entities.products).length > 0) {
        // orders = state.session.user.orderProducts.map(order => state.entities.products[order]);
        
        if (state.entities.orderProducts.length > 0) {
            orders = state.entities.orderProducts.map(order => state.entities.products[order.product]);
        }
        // if (state.entities.orderProducts.product) {
        //     orders = state.entities.orderProducts.product
        // }
    }
    
    return {
        currentUser: state.session.user,
        user: state.session.user.username,
        rewards: state.entities.rewards,
        // rewards: state.session.user.rewards,
        isAdmin: state.session.user.isAdmin,
        orders: orders,
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        getOrder: (userId) => dispatch(getOrder(userId)),
        fetchReward: (userId) => dispatch(getReward(userId)),
        // getCart: (userId) => dispatch(getCart(userId))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile);