import { combineReducers } from "redux";

import authReducer from "./auth/authReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  user: authReducer,
  products: productsReducer,
});

export default rootReducer;
