import { SubmitHandler } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'
import { ForgotFormType, useRegisterForm } from '../schemaForms.ts'
import s from '../stylesForm.module.scss'

type ForgotFormProps = {
  onSubmit: SubmitHandler<ForgotFormType>
}

export const ForgotForm = ({ onSubmit }: ForgotFormProps) => {
  const { control, handleSubmit } = useRegisterForm(onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'} className={s.bigMargin}>
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

        <Button type={'submit'} fullWidth className={s.button}>
          Send Instructions
        </Button>
      </form>

      <Typography as={'p'} variant={'body2'} className={s.questionParagraph}>
        Did you remember your password?
      </Typography>

      <Button as={'a'} variant={'link'} className={s.signUp}>
        Try logging in
      </Button>
    </Card>
  )
}
