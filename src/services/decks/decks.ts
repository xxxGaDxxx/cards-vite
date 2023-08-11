import { baseApi } from '../baseApi.ts'

import { CreateDeckResponse, CreateDecksArgs, DecksResponse, GetDecksArgs } from './types.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDecksArgs>({
        query: args => {
          return {
            url: 'v1/decks',
            method: 'GET',
            params: args,
          }
        },
        providesTags: ['Decks'],
      }),
      createDecks: builder.mutation<CreateDeckResponse, CreateDecksArgs>({
        query: args => {
          return {
            url: 'v1/decks',
            method: 'POST',
            body: args,
          }
        },
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDecksMutation } = decksApi
