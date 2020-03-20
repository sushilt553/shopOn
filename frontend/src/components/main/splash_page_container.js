import {connect} from 'react-redux';
import SplashPage from './splash_page';
import { fetchAllCategories } from '../../actions/category_actions';
import { fetchAllProducts } from '../../actions/product_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchAllProducts: () => dispatch(fetchAllProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);