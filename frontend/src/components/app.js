import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import SplashPageContainer from "./main/splash_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./main/profile_container";
import ProductsIndexContainer from "./products/products_index_container";
import NavbarContainer from './main/navbar_container';
import ProductCreateContainer from "./products/product_create_container";
import ProductShowPageContainer from "./products/product_show_container";
import ProductEditContainer from "./products/product_edit_container";
import CategoryProductsContainer from "./categories/category_products_container";
import CartContainer from "./cart/cart_container"

const App = () => (

  <div>
    <NavbarContainer />
    <Switch>
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/cart" component={CartContainer} />
      <ProtectedRoute exact path={`/categories/:category`} component={CategoryProductsContainer} />
      <ProtectedRoute exact path="/products/:id/edit" component={ProductEditContainer} />
      <ProtectedRoute exact path="/products/new" component={ProductCreateContainer} />
      <ProtectedRoute exact path={`/products/:id`} component={ProductShowPageContainer} />
      <ProtectedRoute exact path="/products" component={ProductsIndexContainer} />
  
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={SplashPageContainer} />
    </Switch>
  </div>
);

export default App;
