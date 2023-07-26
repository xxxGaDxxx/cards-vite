import { Button } from './components/ui/button'
import s from './app.module.scss'

export function App() {
  return (
    <div className={s.container}>
      <Button variant={'primary'}>Primary button</Button>
    </div>
  )
}
