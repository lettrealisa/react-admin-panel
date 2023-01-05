import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => "/pets",
    }),
    addNewPet: builder.mutation({
      query: (initialPet) => ({
        url: "/pets",
        method: "POST",
        body: initialPet,
      }),
    }),
    getFoods: builder.query({
      query: () => "/foods",
    }),
  }),
});

export const { useGetPetsQuery, useAddNewPetMutation, useGetFoodsQuery } =
  apiSlice;
