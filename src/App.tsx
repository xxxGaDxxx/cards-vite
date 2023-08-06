import { useState } from 'react'

import s from './app.module.scss'
import {
  ItemsType,
  Tabs,
  Header,
  Button,
  Card,
  Checkbox,
  DataRadioType,
  Radio,
  Typography,
  TextField,
} from './components'

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

const tabs: ItemsType[] = [
  {
    label: 'js',
    key: '1',
  },
  {
    label: 'ts',
    key: '2',
  },
  {
    label: 'react',
    key: '3',
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
  const [activeTabs, setActiveTabs] = useState<ItemsType>(tabs[1])

  const onClickTabs = (item: ItemsType) => {
    setActiveTabs(item)
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
        <div style={{ marginBottom: '20px' }}></div>
        <Tabs items={tabs} onClick={onClickTabs} activeButton={activeTabs} />
      </Card>
    </div>
  )
}
