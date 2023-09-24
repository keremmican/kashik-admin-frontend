// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import AuthRoute from "./views/Auth/AuthRoute";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import OwnerLayout from "layouts/Owner.js";
import OnboardingLayout from "layouts/Onboarding.js";

const store = createStore(rootReducer);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/auth" component={AuthLayout} />
        <AuthRoute path="/admin" component={AdminLayout} />
          <AuthRoute path="/owner" component={OwnerLayout} />
          <AuthRoute path="/onboarding" component={OnboardingLayout} />
        <Redirect from={"/"} to="/auth/business" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
