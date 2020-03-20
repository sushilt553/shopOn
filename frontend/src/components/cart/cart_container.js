import {connect} from 'react-redux';
import Cart from './cart';
// import { fetchAllCategories } from '../../actions/category_actions';
// import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = state => {

    // let products;

    // if (state.entities.products === {}){
    const products = state.session.user.cartProducts.map((product) => state.entities.products[product]);
    // }
    
    return {
        products: products,
        user: state.session.user
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAllProducts: () => dispatch(fetchAllProducts()),
//         fetchAllCategories: () => dispatch(fetchAllCategories()),
//         addToCart: (cart) => dispatch(addToCart(cart))
//     }
// }

export default connect(mapStateToProps)(Cart);