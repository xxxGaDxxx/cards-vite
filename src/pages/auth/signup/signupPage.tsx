import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '../../../common/constants/routePath'
import { RegisterForm } from '../../../components'
import { RegisterFormType } from '../../../components/auth/schemaForms'
import { useSignupMutation } from '../../../services/auth/auth'
import { BaseQueryError } from '../../../services/auth/types'

export const SignupPage = () => {
  const [signup, { isLoading }] = useSignupMutation()
  const navigate = useNavigate()

  const onSignup = async (data: RegisterFormType) => {
    try {
      await signup({ email: data.email, password: data.password }).unwrap()
      navigate(PATH.LOGIN)

      toast.success('🦄 Wow so easy!')
    } catch (error: BaseQueryError | any) {
      toast.error(error?.data?.errorMessages[0])
    }
  }

  return <RegisterForm onSubmit={onSignup} isSubmitting={isLoading} />
}
