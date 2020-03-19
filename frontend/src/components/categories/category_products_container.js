import {connect} from 'react-redux';
import CategoryProducts from './category_products';
import { fetchCategoryProducts } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
    // const
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryProducts = (category) => dispatch(fetchCategoryProducts(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);