import {connect} from 'react-redux';
import HomePage from './home_page';
import { logout } from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect (null, mapDispatchToProps)(HomePage);