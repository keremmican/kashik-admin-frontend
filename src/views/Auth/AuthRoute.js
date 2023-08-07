import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import Loading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../../store/actions/authActions";

const BASE_URL = process.env.REACT_APP_URL;

const AuthRoute = ({ component: Component, ...rest }) => {
  const accessToken = getCookie("access_token");
  const [loading, setLoading] = useState(true);
  const userRole = useSelector((state) => state.auth.userRole);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        if (accessToken) {
          const response = await axios.post(
            BASE_URL + "/auth/validate-token?token=" + accessToken
          );
          dispatch({ type: "SET_USER_ROLE", payload: response.data });
        } else {
          dispatch({ type: "SET_USER_ROLE", payload: "ROLE_GUEST" });
        }
      } catch (error) {
        console.error("User role check failed:", error);
        dispatch({ type: "SET_USER_ROLE", payload: "ROLE_GUEST" });
      } finally {
        setLoading(false);
      }
    };

    checkUserRole();

    dispatch(clearData());
  }, [accessToken, dispatch]);

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
