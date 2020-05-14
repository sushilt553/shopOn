import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const RECEIVE_ORDER_ITEM= "RECEIVE_ORDER_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";
export const RECEIVE_REWARD = "RECEIVE_REWARD";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const removeCartItems = () => ({
  type: REMOVE_CART_ITEMS
})

// export const addItemToCart = (cart) => ({
//   type: RECEIVE_CART_ITEM,
//   cart
// })

export const addItemToCart = (cart) => {
  return {
  type: RECEIVE_CART_ITEM,
  cart
  }
}

export const addItemToOrder = (order) => ({
  type: RECEIVE_ORDER_ITEM,
  order
})

export const removeItemFromCart = (item) => ({
  type: REMOVE_CART_ITEM,
  item
})

export const receiveReward = (reward) => {
  return {
    type: RECEIVE_REWARD,
    reward
  }
}

export const signup = user => dispatch =>
  APIUtil.signup(user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });

export const login = user => dispatch => 
  APIUtil.login(user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false)
  return dispatch(logoutUser());
};

export const addToCart = cart => dispatch => {
  return APIUtil.updateCart(cart)
  .then(() => dispatch(addItemToCart(cart)))
}

export const addToOrder = order => dispatch => {
  return APIUtil.updateOrder(order)
  .then(() => dispatch(addItemToOrder(order)))
}

export const removeFromCart = productData => dispatch => {
  return APIUtil.removeProduct(productData)
  .then(() => dispatch(removeItemFromCart(productData.product)))
}

export const getCart = userId => dispatch => {
  return APIUtil.getCart(userId)
  .then(cart => dispatch(addItemToCart(cart.data)))
}

export const getOrder = userId => dispatch => {
  return APIUtil.getOrder(userId)
  .then(order => dispatch(addItemToOrder(order.data)))
}

export const getReward = userId => dispatch => {
  return APIUtil.getReward(userId)
  .then(reward => dispatch(receiveReward(reward.data)))
}

export const updateReward = userData => dispatch => {
  return APIUtil.updateReward(userData)
  .then(reward => dispatch(receiveReward(reward.data)))
}
// export const refetchUser = () => dispatch => {
//   return APIUtil.getUser()
//   .then((res) => dispatch(receiveCurrentUser(res.data)))
// }
