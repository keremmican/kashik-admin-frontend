export const setAccessToken = (accessToken) => {
  return {
    type: "SET_ACCESS_TOKEN",
    payload: accessToken,
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

export const clearData = () => {
  return {
    type: "CLEAR_DATA",
  };
};