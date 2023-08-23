export type UserArgs = {
  email: string
  name: string
  id: string
  isEmailVerified: boolean
  avatar: string
  created: string
  updated: string
}

export type LoginArgs = {
  password: string
  email: string
  rememberMe: string
}

export type LoginResponse = {
  accessToken: string
}

export type SignupArgs = {
  password: string
  email: string
  html?: string
  name?: string
  sendConfirmationEmail?: boolean
}

export type SignupResponse = {
  password: string
  email: string
  name: string
}

export type PasswordRecoveryArgs = {
  email: string
  html?: string
  subject?: string
}
