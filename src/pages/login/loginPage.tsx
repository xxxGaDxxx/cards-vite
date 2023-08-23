import { Navigate, useNavigate } from 'react-router-dom'

import { PATH } from '../../common/constants/routePath'
import { LoginForm } from '../../components'
import { useLoginMutation, useMeQuery } from '../../services/auth/auth'
import { LoginArgs } from '../../services/auth/types'

export const LoginPage = () => {
  const { data, isLoading } = useMeQuery()
  const [login, { isLoading: isSubmitting }] = useLoginMutation()

  const navigate = useNavigate()

  if (isLoading) return <div>...Loading</div>

  if (data) return <Navigate to="/" />

  const handleLogin = (data: LoginArgs) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate(PATH.DECKS)
      })
  }

  return <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} />
}
