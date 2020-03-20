import {connect} from 'react-redux';
import Cart from './cart';

const mapStateToProps = state => {

    const products = state.session.user.cartProducts.map((product) => state.entities.products[product]);
    debugger;
    return {
        products: products,
    }
}

export default connect(mapStateToProps)(Cart);