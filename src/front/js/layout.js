import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { App } from "./pages/App";
import { SignUp } from "./pages/signUp";
import { LandingPage } from "./pages/landingPage";
import { Dashboard } from "./pages/dashboard";
import injectContext from "./store/appContext";
import { MarketPlace } from "./pages/marketPlace";

import { Account } from "./pages/account";
import { Login } from "./pages/login";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CompletedAppointments } from "./component/completedAppointments";
import { Profile } from "./pages/profile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account/1" component={Account} />
            <Route exact path="/marketplace" component={MarketPlace} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/ca" component={CompletedAppointments} />
            <Route exact path="/profile/:id" component={Profile} />

            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
