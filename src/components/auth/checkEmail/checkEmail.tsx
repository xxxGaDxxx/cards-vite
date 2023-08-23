import { useNavigate } from 'react-router-dom'

import { EmailIcon } from '../../../assets/icons'
import { PATH } from '../../../common/constants/routePath'
import { Button, Card, Typography } from '../../ui'
import style from '../stylesForm.module.scss'

import s from './checkEmail.module.scss'

export const CheckEmail = () => {
  const navigate = useNavigate()

  const email = sessionStorage.getItem('email-cards') || 'example@mail.com'

  return (
    <Card className={s.card}>
      <Typography variant={'large'} as={'h1'}>
        Check Email
      </Typography>

      <div className={s.containerIcon}>
        <EmailIcon />
      </div>

      <Typography as={'p'} variant={'body2'} className={style.descriptionParagraph}>
        We’ve sent an Email with instructions to {email}
      </Typography>

      <Button fullWidth as={'a'} onClick={() => navigate(PATH.LOGIN)}>
        Back to Sign In
      </Button>
    </Card>
  )
}
