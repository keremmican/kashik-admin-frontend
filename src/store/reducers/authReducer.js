const initialState = {
  accessToken: null,
  userRole: "ROLE_GUEST",
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };
    case "SET_USER_ROLE":
      return {
        ...state,
        userRole: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "CLEAR_DATA":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
