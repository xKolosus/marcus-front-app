import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";
import categoryReducer from "../features/category/categorySlice";
import productReducer from "../features/product/productSlice";
import { productApi } from "../services/productApi";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    categories: categoryReducer,
    products: productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware).concat(productApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
