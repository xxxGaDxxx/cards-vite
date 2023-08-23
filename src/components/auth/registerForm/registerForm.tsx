import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { PATH } from '../../../common/constants/routePath'
import { Button, Card, ControlledTextField, Typography } from '../../ui/'
import { RegisterFormType, useRegisterForm } from '../schemaForms'
import s from '../stylesForm.module.scss'

type RegisterFormProps = {
  onSubmit: SubmitHandler<RegisterFormType>
  isSubmitting: boolean
}

export const RegisterForm = ({ onSubmit, isSubmitting }: RegisterFormProps) => {
  const { control, handleSubmit } = useRegisterForm(onSubmit)

  const navigate = useNavigate()

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Signe Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          placeholder={'email'}
          autoComplete="current-email"
          containerProps={{ className: s.textField }}
        />

        <ControlledTextField
          label={'Password'}
          name={'password'}
          control={control}
          type={'password'}
          placeholder={'password'}
          autoComplete="current-password"
          containerProps={{ className: s.textField }}
        />

        <ControlledTextField
          label={'Confirm Password'}
          name={'confirmPassword'}
          control={control}
          type={'password'}
          placeholder={'confirm password'}
          autoComplete="current-confirm password"
          containerProps={{ className: s.textField }}
        />

        <Button type={'submit'} fullWidth className={s.button} disabled={isSubmitting}>
          Sign Up
        </Button>
      </form>

      <Typography as={'p'} variant={'body2'} className={s.questionParagraph}>
        Already have an account?
      </Typography>

      <Button as={'a'} variant={'link'} onClick={() => navigate(PATH.LOGIN)} className={s.signUp}>
        Sign In
      </Button>
    </Card>
  )
}
