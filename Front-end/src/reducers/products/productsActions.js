import Api from "../../API";
import * as types from "./productsActionTypes";

export const addProduct = (data) => async (dispatch) => {
  try {
    const productApi = Api("products");
    const product = await productApi.post("", {
      ...data,
    });

    alert("Successfully added");
    dispatch({
      type: types.ADD_PRODUCT_SUCCESS,
    });
  } catch (err) {
    alert("Could not be added");
    dispatch({
      type: types.ADD_PRODUCT_FAILURE,
    });
  }
};

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  try {
    const productApi = Api("products");
    const products = await productApi.get();

    dispatch({
      type: types.GET_PRODUCT_SUCCESS,
      payload: products.data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_PRODUCT_FAILURE,
    });
  }
};

export const selectProduct = (filtered) => {
  return {
    type: types.SELECT_PRODUCT,
    payload: {
      selectedProducts: filtered,
    },
  };
};