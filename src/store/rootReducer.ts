import { combineReducers } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";

const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer
});

export default rootReducer;
