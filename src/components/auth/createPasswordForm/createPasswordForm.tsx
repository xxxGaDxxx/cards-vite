import { clsx } from 'clsx'
import { SubmitHandler } from 'react-hook-form'

import { Button, Card, ControlledTextField, Typography } from '../../ui'
import { CreatePasswordFormType, useCreatePasswordForm } from '../schemaForms'
import s from '../stylesForm.module.scss'

type CreatePasswordFormProps = {
  onSubmit: SubmitHandler<CreatePasswordFormType>
}

export const CreatePasswordForm = ({ onSubmit }: CreatePasswordFormProps) => {
  const { control, handleSubmit } = useCreatePasswordForm(onSubmit)

  return (
    <Card className={clsx(s.card, s.cardPaddingBottom)}>
      <Typography variant={'large'} as={'h1'} className={s.bigMargin}>
        Create new password
      </Typography>

      <form onSubmit={handleSubmit}>
        <ControlledTextField
          label={'Password'}
          name={'password'}
          control={control}
          type={'password'}
          placeholder={'password'}
          containerProps={{ className: s.textFieldMediumMargin }}
        />

        <Typography
          as={'p'}
          variant={'body2'}
          className={clsx(s.descriptionParagraph, s.descriptionParagraphMargin)}
        >
          Create new password and we will send you further instructions to email
        </Typography>

        <Button type={'submit'} fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
