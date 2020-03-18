import {connect} from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        user: state.session.user.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile);