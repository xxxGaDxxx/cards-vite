import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const validate = {
  email: z.string().trim().nonempty('Enter Email').email('Invalid email address'),
  password: z
    .string()
    .trim()
    .nonempty('Enter Password')
    .min(8, 'Password must be at least 8 characters'),
}

//Login Form
export const schemaLogin = z.object({
  email: validate.email,
  password: validate.password,
  rememberMe: z.literal<boolean>(true, {
    errorMap: () => {
      return { message: 'Please accept ' }
    },
  }),
})

export type LoginFormType = z.infer<typeof schemaLogin>

export const useLoginForm = (onSubmit: SubmitHandler<LoginFormType>) => {
  const { handleSubmit, ...restProps } = useForm<LoginFormType>({
    resolver: zodResolver(schemaLogin),
    mode: 'onSubmit',
  })

  return { handleSubmit: handleSubmit(onSubmit), ...restProps }
}

//Register form
export const schemaRegister = z
  .object({
    email: validate.email,
    password: validate.password,
    confirmPassword: validate.password,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  })

export type RegisterFormType = z.infer<typeof schemaRegister>

export const useRegisterForm = (onSubmit: SubmitHandler<RegisterFormType>) => {
  const { handleSubmit, ...restProps } = useForm<RegisterFormType>({
    resolver: zodResolver(schemaRegister),
    mode: 'onSubmit',
  })

  return { handleSubmit: handleSubmit(onSubmit), ...restProps }
}

//Forgot password form
export const schemaForgot = z.object({
  email: validate.email,
})

export type ForgotFormType = z.infer<typeof schemaForgot>

export const useForgotForm = (onSubmit: SubmitHandler<ForgotFormType>) => {
  const { handleSubmit, ...restProps } = useForm<ForgotFormType>({
    resolver: zodResolver(schemaForgot),
    mode: 'onSubmit',
  })

  return { handleSubmit: handleSubmit(onSubmit), ...restProps }
}

//Create Password form
export const schemaCreatePassword = z.object({
  password: validate.password,
})

export type CreatePasswordFormType = z.infer<typeof schemaCreatePassword>

export const useCreatePasswordForm = (onSubmit: SubmitHandler<CreatePasswordFormType>) => {
  const { handleSubmit, ...restProps } = useForm<CreatePasswordFormType>({
    resolver: zodResolver(schemaCreatePassword),
    mode: 'onSubmit',
  })

  return { handleSubmit: handleSubmit(onSubmit), ...restProps }
}
