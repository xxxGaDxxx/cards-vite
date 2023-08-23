import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const baseUrl = import.meta.env.VITE_BASE_URL

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
})

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'v1/auth/refresh-token', method: 'POST' },
          api,
          extraOptions
        )

        if (refreshResult?.meta?.response?.status === 204) {
          result = await baseQuery(args, api, extraOptions)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export default customFetchBase
