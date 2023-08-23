import { useNavigate } from 'react-router-dom'

import { PATH } from '../../common/constants/routePath'
import { RegisterForm } from '../../components'
import { RegisterFormType } from '../../components/auth/schemaForms'
import { useSignupMutation } from '../../services/auth/auth'

export const SignupPage = () => {
  const [signup, { isLoading }] = useSignupMutation()
  const navigate = useNavigate()

  const onSignup = (data: RegisterFormType) => {
    signup({ email: data.email, password: data.password })
      .unwrap()
      .then(() => {
        navigate(PATH.LOGIN)
      })
  }

  return <RegisterForm onSubmit={onSignup} isSubmitting={isLoading} />
}
