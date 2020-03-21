import {connect} from 'react-redux';
import Cart from './cart';
import { addToOrder, removeFromCart } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = state => {

    let cart = [];
    // debugger;
    if (Object.values(state.entities.products).length > 0) {
        cart = state.session.user.cartProducts.map(product => state.entities.products[product]);
    }
    // const products = state.session.user.cartProducts.map((product) => state.entities.products[product]);
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
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);