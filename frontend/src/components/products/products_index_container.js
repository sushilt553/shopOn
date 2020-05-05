import {connect} from 'react-redux';
import ProductsIndex from './products_index';
import { fetchAllProducts, deleteProduct } from '../../actions/product_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import {addToCart} from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products),
        isAdmin: state.session.user ? state.session.user.isAdmin : false,
        user: state.session.user ? state.session.user : null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        deleteProduct: (productId) => dispatch(deleteProduct(productId)),
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        addToCart: (cart) => dispatch(addToCart(cart))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);