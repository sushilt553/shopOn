import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
    let numItems = 0;
    if (state.session.isAuthenticated){
    numItems = state.session.user.cartProducts.length
    }
    return {
        currentUser: state.session.isAuthenticated,
        categories: Object.values(state.entities.categories),
        numItems: numItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);