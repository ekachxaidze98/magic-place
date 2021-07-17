import Api from "../../API";
import * as types from "./authActionTypes";

export const loginAction = (data) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  try {
    const loginApi = Api("user/login");
    const user = await loginApi.post("", data);

    localStorage.setItem("token", user.data.user.token);

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user: user.data.user,
      },
    });
  } catch (err) {
    dispatch({
      type: types.LOGIN_FAILURE,
    });
  }
};

export const tokenCheckAction = (data) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  try {
    const checkApi = Api("user/check");
    const user = await checkApi.post("", {
      token: data,
    });

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user: user.data.user,
      },
    });
  } catch (err) {
    dispatch({
      type: types.LOGIN_FAILURE,
    });
  }
};

export const registerAction = (data) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });

  try {
    const registerApi = Api("user/register");
    const user = await registerApi.post("", data);

    localStorage.setItem("token", user.data.token);

    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: {
        user: user.data,
      },
    });
  } catch (err) {
    dispatch({
      type: types.REGISTER_FAILURE,
    });
  }
};
