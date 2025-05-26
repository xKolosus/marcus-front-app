import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Purchase } from "types";

interface PurchaseState {
  lastFetchedPurchases: Purchase[];
  lastCreatedPurchase: Purchase | null;
}

const initialState: PurchaseState = {
  lastFetchedPurchases: [],
  lastCreatedPurchase: null
};

const purchaseSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLastPurchases (
      state,
      action: PayloadAction<Purchase[]>
    ) {
      state.lastFetchedPurchases = action.payload;
    },
    setLastCreatedPurchase(state, action: PayloadAction<Purchase | null>) {
      state.lastCreatedPurchase = action.payload;
    },
  },
});

export const { setLastPurchases, setLastCreatedPurchase } = purchaseSlice.actions;
export default purchaseSlice.reducer;