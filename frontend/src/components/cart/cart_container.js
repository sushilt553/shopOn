import {connect} from 'react-redux';
import Cart from './cart';
import { addToOrder, removeFromCart, getCart } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = state => {

    let cart = [];
    if (Object.values(state.entities.products).length > 0) {
        // cart = state.session.user.cartProducts.map(product => state.entities.products[product]);
        if (state.entities.cartProducts.length > 0) {
            cart = state.entities.cartProducts.map(product => state.entities.products[product.product]);
        }
    }
    // debugger;
    return {
        cart: cart,
        user: state.session.user,
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToOrder: (order) => dispatch(addToOrder(order)),
        removeFromCart: (productData) => dispatch(removeFromCart(productData)),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        getCart: (userId) => dispatch(getCart(userId))
        // refetchUser: () => dispatch(refetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);