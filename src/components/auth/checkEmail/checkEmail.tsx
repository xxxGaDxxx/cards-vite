import { EmailIcon } from '../../../assets/icons'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
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
        Enter your email address and we will send you further instructions
      </Typography>

      <Button fullWidth className={s.button}>
        Back to Sign In
      </Button>
    </Card>
  )
}
