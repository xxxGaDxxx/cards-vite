import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

export const shemaLogin = z.object({
  login: z.string().trim().nonempty('Enter Login').min(4, 'Login must be at least 8 characters'),
  password: z
    .string()
    .trim()
    .nonempty('Enter Password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.literal<boolean>(true, {
    errorMap: () => {
      return { message: 'Please accept ' }
    },
  }),
})

export type LoginFormType = z.infer<typeof shemaLogin>

export const useLoginForm = (onSubmit: SubmitHandler<LoginFormType>) => {
  const { handleSubmit, ...restProps } = useForm<LoginFormType>({
    resolver: zodResolver(shemaLogin),
    mode: 'onSubmit',
  })

  return { handleSubmit: handleSubmit(onSubmit), ...restProps }
}
