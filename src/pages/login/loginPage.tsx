import { Navigate, useNavigate } from 'react-router-dom'

import { LoginForm } from '../../components'
import { useLoginMutation, useMeQuery } from '../../services/auth/auth'

import s from './loginPage.module.scss'

export const LoginPage = () => {
  const { data, isLoading } = useMeQuery()
  const [login, { isLoading: isSubmitting }] = useLoginMutation()

  const navigate = useNavigate()

  if (isLoading) return <div>...Loading</div>
  if (data) return <Navigate to="/" />

  const handleLogin = (data: any) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return (
    <div className={s.container}>
      <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} />
    </div>
  )
}
