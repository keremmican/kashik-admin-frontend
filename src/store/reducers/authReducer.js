const initialState = {
  accessToken: null,
  refreshToken: null,
  userRole: "ROLE_GUEST",
  loading: true,
  userId: null,
  username: null,
  userStatus: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };
    case "SET_REFRESH_TOKEN":
      return {
        ...state,
        refreshToken: action.payload,
      }
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
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      }
    case "SET_USER_STATUS":
      return {
        ...state,
        userStatus: action.payload,
      }
    case "SET_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "CLEAR_DATA":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
