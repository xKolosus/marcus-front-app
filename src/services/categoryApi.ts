import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9999/api/category",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '',
    }),
    disableCategory: builder.mutation({
      query: (postId) => ({
        url: `/disable/${postId}`,
        method: "PATCH",
      }),
    }),
    addCategory: builder.mutation<Category, Partial<Category>>({
      query: (newCategory) => ({
        url: "",
        method: "POST",
        body: newCategory,
      }),
    })
  }),
});

export const {
  useGetCategoriesQuery,
  useDisableCategoryMutation,
  useAddCategoryMutation
} = categoryApi;
