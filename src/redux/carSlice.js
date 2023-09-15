import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6501edf6736d26322f5c8062.mockapi.io/advert',
  }),
  tagTypes: ['Car'],
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/`,
      providesTags: ['Car'],
    }),
  }),
});

export const { useGetCarsQuery } = Api;
