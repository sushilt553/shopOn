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

export const updateCart = cart => {
  return axios.patch(`/api/users/${cart.userId}`, cart.cartProducts);
}

export const updateOrder = order => {
  return axios.patch(`/api/users/${order.userId}`, {order: order.orderProducts, rewards: order.rewards});
}

export const removeProduct = productData => {
  return axios.delete(`/api/users`, {data: {productId: productData.productId, userId: productData.userId}});
}
