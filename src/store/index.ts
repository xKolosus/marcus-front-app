import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "../services/categoryApi";
import categoryReducer from "../features/category/categorySlice";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/product/productSlice";
import purchaseReducer from "../features/purchase/purchaseSlice";
import { productApi } from "../services/productApi";
import { authApi } from "../services/authApi";
import { purchaseApi } from "../services/purchaseApi";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [purchaseApi.reducerPath]: purchaseApi.reducer,
    categories: categoryReducer,
    products: productReducer,
    auth: authReducer,
    purchases: purchaseReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware).concat(productApi.middleware).concat(authApi.middleware).concat(purchaseApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
