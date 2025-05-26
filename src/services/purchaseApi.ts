import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Purchase, PurchasePage, PurchaseRequest, PurchaseSearch } from "../types";
import { RootState } from "store";

export const purchaseApi = createApi({
  reducerPath: "purchaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9999/api/purchase",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({
    createPurchase: builder.mutation<Purchase, Partial<PurchaseRequest>>({
      query: (products) => ({
        url: "",
        method: "POST",
        body: products,
      }),
    }),
    getPurchases: builder.query<PurchasePage, Partial<PurchaseSearch>>({
      query: (search) => ({
        url: "/search",
        method: "POST",
        body: search
      }),
    })
  }),
});

export const {
  useCreatePurchaseMutation,
  useGetPurchasesQuery,
} = purchaseApi;
