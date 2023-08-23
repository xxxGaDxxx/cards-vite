import { useNavigate, useParams } from 'react-router-dom'

import { PATH } from '../../common/constants/routePath'
import { CreatePasswordForm } from '../../components'
import { CreatePasswordFormType } from '../../components/auth/schemaForms'
import { useResetPasswordMutation } from '../../services/auth/auth'

export const NewPasswordPage = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { token } = useParams()

  const onResetPassword = (data: CreatePasswordFormType) => {
    resetPassword({ password: data.password, token: token ? token : '' })
      .unwrap()
      .then(() => {
        navigate(PATH.LOGIN)
      })
  }

  return <CreatePasswordForm onSubmit={onResetPassword} isSubmitting={isLoading} />
}
