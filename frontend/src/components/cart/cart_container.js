import {connect} from 'react-redux';
import Cart from './cart';
import { addToOrder, removeFromCart } from '../../actions/session_actions';

const mapStateToProps = state => {

    const products = state.session.user.cartProducts.map((product) => state.entities.products[product]);
    // debugger;
    return {
        products: products,
        user: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToOrder: (order) => dispatch(addToOrder(order)),
        removeFromCart: (productData) => dispatch(removeFromCart(productData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);