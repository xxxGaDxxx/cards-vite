import { baseApi } from '../baseApi'

import {
  LoginArgs,
  LoginResponse,
  PasswordRecoveryArgs,
  SignupArgs,
  SignupResponse,
  UserArgs,
} from './types'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<UserArgs | null, void>({
        query: () => {
          return {
            url: 'v1/auth/me',
            method: 'GET',
          }
        },
        extraOptions: {
          maxRetries: 0, //не делает повторный запрос
        },
        providesTags: ['Me'],
      }),

      login: builder.mutation<LoginResponse, LoginArgs>({
        query: arg => {
          return {
            url: 'v1/auth/login',
            method: 'POST',
            params: arg,
          }
        },
        invalidatesTags: ['Me'],
      }),

      logout: builder.mutation<unknown, void>({
        query: () => {
          return {
            url: 'v1/auth/logout',
            method: 'POST',
          }
        },
        //зануляем data в me
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            authApi.util.updateQueryData('me', undefined, () => {
              return null
            })
          )

          try {
            await queryFulfilled
          } catch {
            patchResult.undo()
          }
        },
        invalidatesTags: ['Me'],
      }),

      signup: builder.mutation<SignupResponse, SignupArgs>({
        query: arg => {
          return {
            url: 'v1/auth/sign-up',
            method: 'POST',
            body: arg,
          }
        },
      }),

      passwordRecovery: builder.mutation<unknown, PasswordRecoveryArgs>({
        query: arg => {
          return {
            url: 'v1/auth/recover-password',
            method: 'POST',
            body: arg,
          }
        },
      }),
    }
  },
})

export const {
  useLoginMutation,
  useMeQuery,
  useLogoutMutation,
  useSignupMutation,
  usePasswordRecoveryMutation,
} = authApi
