import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import SplashPage from "./main/splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import HomePageContainer from './main/home_page_container';

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/home" component={HomePageContainer} />
    <AuthRoute exact path="/" component={SplashPage} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </Switch>
);

export default App;
