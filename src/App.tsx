import { useState } from 'react'

import s from './app.module.scss'
import { Header } from './components/header'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Checkbox } from './components/ui/checkbox'
import { DataRadioType, Radio } from './components/ui/radio'
import { TextField } from './components/ui/textField'
import { Typography } from './components/ui/typography'

const dataRadio: DataRadioType[] = [
  {
    id: '1',
    label: 'js',
    value: 'js',
  },
  {
    id: '2',
    label: 'REACT',
    value: 'react',
  },
  {
    id: '3',
    label: '123123',
    value: '123123',
  },
  {
    id: '4',
    label: 'number',
    value: 'number',
  },
]

export function App() {
  const [check, setCheck] = useState(false)
  const [textInput, setTextInput] = useState('')
  const onChangeHandler = (value: string) => {
    setTextInput(value)
  }

  const [selectedValue, setSelectedValue] = useState<string>('react') // Изначально выбранное значение пустое

  const handleRadioChange = (value: string) => {
    setSelectedValue(value)
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

        <Radio
          dataRadio={dataRadio}
          defaultValue={selectedValue}
          onValueChange={handleRadioChange}
        />
      </Card>
    </div>
  )
}
