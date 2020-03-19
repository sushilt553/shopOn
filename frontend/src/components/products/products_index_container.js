import {connect} from 'react-redux';
import ProductsIndex from './products_index';
import { fetchAllProducts, deleteProduct } from '../../actions/product_actions';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        deleteProduct: (productId) => dispatch(deleteProduct(productId)),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);