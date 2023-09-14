import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import Loading from "react-loading";
import store from "../../store";
import apiClient from "../../api/axiosInstance";
import {setAccessToken, setIsLoggedIn, setUserId, setUserRole} from "../../store/actions/authActions";

const BASE_URL = process.env.REACT_APP_URL;

const AuthRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const userRole = store.getState().auth.userRole
  let accessToken = store.getState().auth.accessToken;
  let loggedIn = store.getState().auth.isLoggedIn

  const deneme = async () => {
    console.log("sa")
    try {
        await apiClient.get('/owner/get-owner-login-info').then(
            (response) => console.log(response)
        )

    } catch (e) {
      console.log(e)
    }
  }

  const checkUserRole = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {}, {
        withCredentials: true
      });
      const {access_token, userId, role} = response.data;
      store.dispatch(setUserId(userId))
      store.dispatch(setAccessToken(access_token))
      store.dispatch(setUserRole(role))
      store.dispatch(setIsLoggedIn(true))
      console.log(access_token)

      // if (accessToken) {
      //   const response = await axios.post(`${BASE_URL}/auth/refresh-token`);
      //   const {access_token, refresh_token, userId, role} = response.data;
      //   store.dispatch(setUserId(userId))
      //   store.dispatch(setAccessToken(access_token))
      //   store.dispatch(setUserRole(role))
         deneme()
      //  } //else {
      //   dispatch({ type: "SET_USER_ROLE", payload: "ROLE_GUEST" });
      // }
    } catch (error) {
      // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      //
      // dispatch(clearData());
      // console.error("User role check failed:", error);
      // dispatch({ type: "SET_USER_ROLE", payload: "ROLE_GUEST" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserRole();
  }, []);

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loading type="balls" color="#ff8c00" />
      </div>
    );
  }

  if (!accessToken || userRole === "ROLE_GUEST") {
    if (rest.path === "/owner" || rest.path === "/admin") {
      return <Redirect to="/" />;
    } else {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    }
  }

  if (userRole === "ROLE_ADMIN") {
    if (rest.path === "/owner" || rest.path === "/auth") {
      return <Redirect to="/admin/dashboard" />;
    } else {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    }
  }

  if (userRole === "ROLE_OWNER") {
    if (rest.path === "/admin" || rest.path === "/auth") {
      return <Redirect to="/owner/dashboard" />;
    } else {
      return <Route {...rest} render={(props) => <Component {...props} />} />;
    }
  }

  return <Redirect to="/auth/business" />;
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export default AuthRoute;
