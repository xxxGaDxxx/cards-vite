import s from './app.module.scss'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Typography } from './components/ui/typography'

export function App() {
  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Button variant={'primary'}>Primary button</Button>
        <Typography>asdwasd</Typography>
        <Typography as={'span'} variant={'body2'}>
          asdwasd
        </Typography>
      </Card>
    </div>
  )
}
