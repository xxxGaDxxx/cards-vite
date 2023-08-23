import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { PATH } from '../../../common/constants/routePath'
import { Button, Card, ControlledTextField, Typography } from '../../ui'
import { ForgotFormType, useForgotForm } from '../schemaForms'
import s from '../stylesForm.module.scss'

type ForgotFormProps = {
  onSubmit: SubmitHandler<ForgotFormType>
  isSubmitting: boolean
}

export const ForgotForm = ({ isSubmitting, onSubmit }: ForgotFormProps) => {
  const { control, handleSubmit } = useForgotForm(onSubmit)

  const navigate = useNavigate()

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          placeholder={'email'}
          containerProps={{ className: s.textFieldMediumMargin }}
        />
        <Typography as={'p'} variant={'body2'} className={s.descriptionParagraph}>
          Enter your email address and we will send you further instructions
        </Typography>

        <Button type={'submit'} fullWidth className={s.button} disabled={isSubmitting}>
          Send Instructions
        </Button>
      </form>

      <Typography as={'p'} variant={'body2'} className={s.questionParagraph}>
        Did you remember your password?
      </Typography>

      <Button as={'a'} variant={'link'} className={s.signUp} onClick={() => navigate(PATH.LOGIN)}>
        Try logging in
      </Button>
    </Card>
  )
}
