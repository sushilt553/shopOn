import {connect} from 'react-redux';
import HomePage from './home_page';
import { logoutUser } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    }
}

export default connect (null, mapDispatchToProps)(HomePage);