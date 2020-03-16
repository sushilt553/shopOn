import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, {
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      });
    case RECEIVE_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
