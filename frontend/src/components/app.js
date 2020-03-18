import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import SplashPage from "./main/splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./main/profile_container";
import ProductsIndexContainer from "./products/products_index_container";
import NavbarContainer from './main/navbar_container';
import ProductCreateContainer from "./products/product_create_container";

const App = () => (

  <div>
    <NavbarContainer />
    <Switch>
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/products" component={ProductsIndexContainer} />
      <ProtectedRoute exact path="/products/new" component={ProductCreateContainer} />
  
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;
