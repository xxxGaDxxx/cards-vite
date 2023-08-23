import { useNavigate } from 'react-router-dom'

import { htmlCodeResetPassword } from '../../common/constants/htmlMailResetPassword'
import { PATH } from '../../common/constants/routePath'
import { ForgotForm } from '../../components'
import { ForgotFormType } from '../../components/auth/schemaForms'
import { usePasswordRecoveryMutation } from '../../services/auth/auth'

export const PasswordRecoveryPage = () => {
  const [passwordRecovery, { isLoading }] = usePasswordRecoveryMutation()

  const navigate = useNavigate()

  const onPasswordRecovery = (data: ForgotFormType) => {
    sessionStorage.setItem('email-cards', data.email)
    passwordRecovery({
      email: data.email,
      html: htmlCodeResetPassword,
    })
      .unwrap()
      .then(() => {
        navigate(PATH.CHECK_EMAIL)
      })
  }

  return <ForgotForm onSubmit={onPasswordRecovery} isSubmitting={isLoading} />
}
