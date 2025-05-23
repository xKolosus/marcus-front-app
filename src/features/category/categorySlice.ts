import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../types";
import { categoryApi } from "../../services/categoryApi";

interface CategoryState {
  lastFetchedCategories: Category[];
  lastDisabledCategoryId: string | null;
  lastAddedCategory: Category | null,
  initialized: boolean
}

const initialState: CategoryState = {
  lastFetchedCategories: [],
  lastDisabledCategoryId: null,
  lastAddedCategory: null,
  initialized: false
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setLastFetchedCategories(state, action: PayloadAction<Category[]>) {
      state.lastFetchedCategories = action.payload;
      state.initialized = true;
    },
    setLastDisabledCategoryId(state, action: PayloadAction<string | null>) {
      state.lastDisabledCategoryId = action.payload;
    },
    setLastAddedCategory(state, action: PayloadAction<Category | null>) {
      state.lastAddedCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      categoryApi.endpoints.getCategories.matchFulfilled,
      (state, { payload }) => {
        if (!state.initialized) {
          state.lastFetchedCategories = payload;
          state.initialized = true;
        }
        }
        );
    },
});

export const { setLastFetchedCategories, setLastDisabledCategoryId, setLastAddedCategory } = categorySlice.actions;
export default categorySlice.reducer;