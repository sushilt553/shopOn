import {connect} from 'react-redux';
import Cart from './cart';
import { addToOrder, removeFromCart } from '../../actions/session_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = state => {

    let products = [];
    // debugger;
    if (Object.values(state.entities.products).length !== 0) {
        products = state.session.user.cartProducts.map(product => state.entities.products[product]);
    }
    // const products = state.session.user.cartProducts.map((product) => state.entities.products[product]);
    // debugger;
    return {
        products: products,
        user: state.session.user
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