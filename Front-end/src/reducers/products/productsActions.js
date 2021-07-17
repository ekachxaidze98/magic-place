import Api from "../../API";
import * as types from "./productsActionTypes";

export const addProduct = (data) => async (dispatch) => {
  try {
    const productApi = Api("products");
    const product = await productApi.post("", {
      ...data,
    });
    console.log(product);
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
