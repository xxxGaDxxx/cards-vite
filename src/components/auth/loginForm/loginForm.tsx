import { SubmitHandler } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckbox, ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'
import { LoginFormType, useLoginForm } from '../schemaForms.ts'
import s from '../stylesForm.module.scss'

type LoginFormProps = {
  onSubmit: SubmitHandler<LoginFormType>
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const { control, handleSubmit } = useLoginForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Signe In
      </Typography>
      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label={'Email'}
          name={'email'}
          control={control}
          placeholder={'email'}
          containerProps={{ className: s.textField }}
        />

        <ControlledTextField
          label={'Password'}
          name={'password'}
          control={control}
          type={'password'}
          placeholder={'password'}
          containerProps={{ className: s.textField }}
        />

        <ControlledCheckbox
          label={'Remember me'}
          name={'rememberMe'}
          control={control}
          position={'left'}
          className={s.checkbox}
        />

        <Typography as={'a'} variant={'body2'} className={s.forgotPassword}>
          Forgot password?
        </Typography>

        <Button type={'submit'} fullWidth className={s.button}>
          Submit
        </Button>
      </form>

      <Typography as={'p'} variant={'body2'} className={s.questionParagraph}>
        Don&apos;t have an account?
      </Typography>

      <Button as={'a'} variant={'link'} className={s.signUp}>
        Sign Up
      </Button>
    </Card>
  )
}