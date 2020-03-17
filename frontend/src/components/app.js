import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import SplashPage from "./main/splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import HomePageContainer from './main/home_page_container';
import NavbarContainer from './main/navbar_container';

const App = () => (

  <div>
    <NavbarContainer />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
