import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { PATH } from '../../../common/constants/routePath'
import { CreatePasswordForm } from '../../../components'
import { CreatePasswordFormType } from '../../../components/auth/schemaForms'
import { useResetPasswordMutation } from '../../../services/auth/auth'
import { BaseQueryError } from '../../../services/auth/types'

export const NewPasswordPage = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const navigate = useNavigate()
  const { token } = useParams()

  const onResetPassword = async (data: CreatePasswordFormType) => {
    try {
      await resetPassword({ password: data.password, token: token ? token : '' }).unwrap()

      navigate(PATH.LOGIN)
      toast.success('Password reset successfully')
    } catch (error: BaseQueryError | any) {
      toast.error(error?.data?.message)
    }
  }

  return <CreatePasswordForm onSubmit={onResetPassword} isSubmitting={isLoading} />
}
