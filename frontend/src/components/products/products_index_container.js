import {connect} from 'react-redux';
import ProductsIndex from './products_index';
import { fetchAllProducts, deleteProduct } from '../../actions/product_actions';

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        deleteProduct: (productId) => dispatch(deleteProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);