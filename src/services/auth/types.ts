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
