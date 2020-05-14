import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout, getCart} from '../../actions/session_actions';

const mapStateToProps = state => {
    let numItems = 0;
    if (state.session.isAuthenticated){
        numItems = state.entities.cartProducts.length;
    }
    // debugger
    return {
        currentUser: state.session.isAuthenticated,
        categories: Object.values(state.entities.categories),
        numItems: numItems,
        user: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        getCart: (userId) => dispatch(getCart(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);