import { useState } from 'react'

import s from './app.module.scss'
import { Header } from './components/header'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Checkbox } from './components/ui/checkbox'
import { TextField } from './components/ui/textField'
import { Typography } from './components/ui/typography'

export function App() {
  const [check, setCheck] = useState(false)
  const [textInput, setTextInput] = useState('')
  const onChangeHandler = (value: string) => {
    setTextInput(value)
  }

  return (
    <div className={s.container}>
      <Header />
      <Card className={s.card}>
        <Button variant={'primary'}>Primary button</Button>
        <Typography>asdwasd</Typography>
        <Typography as={'span'} variant={'body2'}>
          asdwasd
        </Typography>

        <Checkbox checked={check} onChange={() => setCheck(prev => !prev)} />

        <TextField value={textInput} type={'search'} onValueChange={onChangeHandler} />
        <div style={{ marginBottom: '20px' }}></div>
      </Card>
    </div>
  )
}
