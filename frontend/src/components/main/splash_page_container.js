import {connect} from 'react-redux';
import SplashPage from './splash_page';
import { fetchAllCategories } from '../../actions/category_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);