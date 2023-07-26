import { Button } from './components/ui/button'
import s from './app.module.scss'
import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div className={s.container}>
      <Button variant={'primary'}>Primary button</Button>
      <Typography>asdwasd</Typography>
      <Typography as={'span'} variant={'body2'}>
        asdwasd
      </Typography>
    </div>
  )
}
