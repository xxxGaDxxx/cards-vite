import { SubmitHandler } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'
import { RegisterFormType, useRegisterForm } from '../schemaForms.ts'
import s from '../stylesForm.module.scss'

type RegisterFormProps = {
  onSubmit: SubmitHandler<RegisterFormType>
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const { control, handleSubmit } = useRegisterForm(onSubmit)

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

        <ControlledTextField
          label={'Confirm Password'}
          name={'confirmPassword'}
          control={control}
          type={'password'}
          placeholder={'confirm password'}
          containerProps={{ className: s.textField }}
        />

        <Button type={'submit'} fullWidth className={s.button}>
          Sign Up
        </Button>
      </form>

      <Typography as={'p'} variant={'body2'} className={s.questionParagraph}>
        Already have an account?
      </Typography>

      <Button as={'a'} variant={'link'} className={s.signUp}>
        Sign In
      </Button>
    </Card>
  )
}
