import { DevTool } from '@hookform/devtools'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { PATH } from '../../../common/constants/routePath'
import { LoginArgs } from '../../../services/auth/types'
import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '../../ui'
import { useLoginForm } from '../schemaForms'
import s from '../stylesForm.module.scss'

type LoginFormProps = {
  onSubmit: SubmitHandler<LoginArgs>
  isSubmitting: boolean
}

export const LoginForm = ({ isSubmitting, onSubmit }: LoginFormProps) => {
  const { control, handleSubmit } = useLoginForm(onSubmit)

  const navigate = useNavigate()

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        {/*{rhf dev tool}*/}
        <DevTool control={control} />
        {/*{rhf dev tool}*/}

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

        <Button type={'submit'} fullWidth className={s.button} disabled={isSubmitting}>
          Sign In
        </Button>
      </form>

      <Typography as={'p'} variant={'body2'} className={s.questionParagraph}>
        Don&apos;t have an account?
      </Typography>

      <Button
        variant={'link'}
        as={'a'}
        onClick={() => navigate(PATH.REGISTRATION)}
        className={s.signUp}
      >
        Sign Up
      </Button>
    </Card>
  )
}
