import {connect} from 'react-redux';
import ProductsIndex from './products_index';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);