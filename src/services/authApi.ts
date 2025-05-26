import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Token, User, UserLogin } from "../types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9999/api/auth",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    authenticate: builder.query<Token, Partial<UserLogin>>({
      query: (login) => ({
        url: "/authenticate",
        method: "POST",
        body: login
      }),
    })
  }),
});

export const {
  useRegisterMutation,
  useAuthenticateQuery
} = authApi;
