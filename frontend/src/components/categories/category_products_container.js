import {connect} from 'react-redux';
import CategoryProducts from './category_products';
import { fetchCategoryProducts, fetchAllCategories } from '../../actions/category_actions';
import {deleteProduct} from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
    const category = ownProps.match.params.category
    return {
        category: category,
        categoryProducts: state.entities.categoryProducts,
        isAdmin: state.session.user.isAdmin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryProducts: (category) => dispatch(fetchCategoryProducts(category)),
        deleteProduct: (productId) => dispatch(deleteProduct(productId)),
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);