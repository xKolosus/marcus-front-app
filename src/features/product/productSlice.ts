import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Page, Product, ProductPage } from "../../types";
import { productApi } from "../../services/productApi";

interface ProductState {
  lastFetchedProducts: Product[];
  lastPage: Page | null;
  lastUpdatedProductId: string | null;
  lastAddedProduct: Product | null,
  initialized: boolean
}

const initialState: ProductState = {
  lastFetchedProducts: [],
  lastPage : null,
  lastUpdatedProductId: null,
  lastAddedProduct: null,
  initialized: false
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setLastFetchedProducts(state, action: PayloadAction<ProductPage>) {
      state.lastFetchedProducts = action.payload.content;
      state.lastPage = action.payload.page;
      state.initialized = true;
    },
    setLastUpdatedProductId(state, action: PayloadAction<string | null>) {
      state.lastUpdatedProductId = action.payload;
    },
    setLastAddedProduct(state, action: PayloadAction<Product | null>) {
      state.lastAddedProduct = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        if (!state.initialized) {
          state.lastFetchedProducts = payload;
          state.initialized = true;
        }
        }
        );
    },
});

export const { setLastFetchedProducts, setLastUpdatedProductId, setLastAddedProduct } = productSlice.actions;
export default productSlice.reducer;