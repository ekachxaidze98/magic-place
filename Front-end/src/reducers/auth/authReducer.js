import * as types from "./authActionTypes";

const initState = {
  details: {},
  isLogged: false,
  errorMessage: "",
  isLoading: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        details: action.payload.user,
        isLogged: true,
        errorMessage: "",
        isLoading: false,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        details: {},
        isLogged: false,
        errorMessage: "Wrong e-mail or password",
        isLoading: false,
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        details: action.payload.user,
        isLogged: true,
        errorMessage: "",
        isLoading: false,
      };

    case types.REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: "Registration failed",
        isLoading: false,
      };

    case "LOADING":
      return { ...state, isLoading: true };

    default:
      return { ...state };
  }
};

export default authReducer;
