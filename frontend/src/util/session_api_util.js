import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = userData => {
  return axios.post("/api/users/signup", userData);
};

export const login = userData => {
  return axios.post("/api/users/login", userData);
};

// export const updateCart = cart => {
//   return axios.patch(`/api/users/${cart.userId}`, cart.cartProducts);
// }

// export const updateOrder = order => {
//   return axios.patch(`/api/users/${order.userId}`, {order: order.orderProducts, rewards: order.rewards});
// }

// export const removeProduct = productData => {
//   return axios.delete(`/api/users`, {data: {productId: productData.productId, userId: productData.userId}});
// }

export const updateCart = cart => {
  return axios.post(`/api/users/cart`, cart)
}

export const updateOrder = order => {
  return axios.post(`/api/users/order`, order)
}

export const removeProduct = productData => {
  // return axios.delete(`/api/users`, {data: {productId: productData.productId, userId: productData.userId}})
  return axios.delete(`/api/users`, { data: { product: productData.product, user: productData.user } })
}

export const getCart = userId => {
  return axios.get(`/api/users/${userId}/cart_items`);
}

export const getOrder = userId => {
  return axios.get(`/api/users/${userId}/order_items`);
}

export const getReward = userId => {
  return axios.get(`/api/users/${userId}/rewards`);
}

export const updateReward = userData => {
  return axios.patch(`/api/users/${userData.userId}`, userData);
}