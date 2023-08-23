import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetchBase } from './refetch'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Me'],
  baseQuery: customFetchBase,
  endpoints: () => ({}),
})
