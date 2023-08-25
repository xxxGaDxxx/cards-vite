import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '../../../common/constants/routePath'
import { LoginForm } from '../../../components'
import { useLoginMutation, useMeQuery } from '../../../services/auth/auth'
import { BaseQueryError, LoginArgs } from '../../../services/auth/types'

export const LoginPage = () => {
  const { data } = useMeQuery()
  const [login, { isLoading: isSubmitting }] = useLoginMutation()

  const navigate = useNavigate()

  if (data) return <Navigate to="/" />

  const handleLogin = async (data: LoginArgs) => {
    try {
      await login(data).unwrap()

      navigate(PATH.DECKS)
    } catch (error: BaseQueryError | any) {
      toast.error(error?.data?.message)
    }
  }

  return <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} />
}
