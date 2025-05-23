import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product, ProductPage, ProductSearch, ProductStock } from "../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9999/api/product",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '',
    }),
    getProduct: builder.query<Product, string>({
      query: (productId) => `/${productId}`,
    }),
    getFilteredProducts: builder.query<ProductPage, ProductSearch>({
      query: (search) => ({
        url: "/search",
        method: "POST",
        body: search
      }),
      keepUnusedDataFor: 0,
    }),
    addCategory: builder.mutation<Product, Partial<Product>>({
      query: (newCategory) => ({
        url: "",
        method: "POST",
        body: newCategory,
      }),
    }),
    updateStock: builder.mutation<ProductStock, Partial<ProductStock>>({
      query: (productStock) => ({
        url: "",
        method: "PATCH",
        body: productStock,
      }),
    }),
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: (product) => ({
        url: `/${product.id}`,
        method: "put",
        body: product,
      }),
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetFilteredProductsQuery,
  useAddCategoryMutation
} = productApi;
