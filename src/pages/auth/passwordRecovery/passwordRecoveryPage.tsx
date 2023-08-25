import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { htmlCodeResetPassword } from '../../../common/constants/htmlMailResetPassword'
import { PATH } from '../../../common/constants/routePath'
import { ForgotForm } from '../../../components'
import { ForgotFormType } from '../../../components/auth/schemaForms'
import { usePasswordRecoveryMutation } from '../../../services/auth/auth'
import { BaseQueryError } from '../../../services/auth/types'

export const PasswordRecoveryPage = () => {
  const [passwordRecovery, { isLoading }] = usePasswordRecoveryMutation()

  const navigate = useNavigate()

  const onPasswordRecovery = async (data: ForgotFormType) => {
    sessionStorage.setItem('email-cards', data.email)
    try {
      await passwordRecovery({
        email: data.email,
        html: htmlCodeResetPassword,
      }).unwrap()

      navigate(PATH.CHECK_EMAIL)
      toast.success('Password recovery email sent successfully')
    } catch (error: BaseQueryError | any) {
      toast.error(error?.data?.message)
    }
  }

  return <ForgotForm onSubmit={onPasswordRecovery} isSubmitting={isLoading} />
}
