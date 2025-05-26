import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";
import { productApi } from "../services/productApi";
import { authApi } from "../services/authApi";
import { purchaseApi } from "../services/purchaseApi";

const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [purchaseApi.reducerPath]: purchaseApi.reducer,
  [authApi.reducerPath]: authApi.reducer
});

export default rootReducer;
