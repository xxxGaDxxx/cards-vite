import { Button } from './components/ui/button'
import s from './app.module.scss'
import { Typography } from './components/ui/typography'
import { Card } from './components/ui/card'

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
