import { EmailIcon } from '../../../assets/icons'
import { Button, Card, Typography } from '../../ui'
import style from '../stylesForm.module.scss'

import s from './checkEmail.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Check Email
      </Typography>

      <div className={s.containerIcon}>
        <EmailIcon />
      </div>

      <Typography as={'p'} variant={'body2'} className={style.descriptionParagraph}>
        We’ve sent an Email with instructions to example@mail.com
      </Typography>

      <Button fullWidth>Back to Sign In</Button>
    </Card>
  )
}
