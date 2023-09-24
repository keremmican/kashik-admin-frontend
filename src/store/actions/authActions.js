export const setAccessToken = (accessToken) => {
  return {
    type: "SET_ACCESS_TOKEN",
    payload: accessToken,
  };
};

export const setRefreshToken = (refreshToken) => {
  return {
    type: "SET_REFRESH_TOKEN",
    payload: refreshToken,
  };
};

export const setUserRole = (userRole) => {
  return {
    type: "SET_USER_ROLE",
    payload: userRole,
  };
};

export const setLoading = (loading) => {
  return {
    type: "SET_LOADING",
    payload: loading,
  };
};

export const setUserId = (userId) => {
  return {
    type: "SET_USER_ID",
    payload: userId,
  };
};

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};

export const setUserStatus = (status) => {
  return {
    type: "SET_USER_STATUS",
    payload: status,
  };
};

export const setIsLoggedIn = (isLoggedIn) => {
  return {
    type: "SET_IS_LOGGED_IN",
    payload: isLoggedIn,
  };
};

export const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};