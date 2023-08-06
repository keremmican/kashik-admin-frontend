// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import AuthRoute from "./views/Auth/AuthRoute";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import UserLayout from "layouts/User.js";

const store = createStore(rootReducer);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/auth" component={AuthLayout} />
        <AuthRoute path="/admin" component={AdminLayout} />
        <AuthRoute path="/user" component={UserLayout} />
        <Redirect from={"/"} to="/auth/welcome" />
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
