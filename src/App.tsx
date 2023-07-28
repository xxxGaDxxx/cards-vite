import { useState } from 'react'

import s from './app.module.scss'
import { Profile, SignOut } from './assets/icons'
import { Avatar } from './components/ui/avatar'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Checkbox } from './components/ui/checkbox'
import { DataItem, DropDown } from './components/ui/dropDown'
import { TextField } from './components/ui/textField'
import { Typography } from './components/ui/typography'

const dataMenu: DataItem[] = [
  {
    id: '1',
    label: 'Ivan',
    email: 'qweqwdqwdasxawdawdaw@gma',
    icon: (
      <Avatar
        src={
          'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
        }
        name={'Ivan'}
      />
    ),
  },
  {
    id: '2',
    label: 'My Profile',
    icon: <Profile />,
  },
  {
    id: '3',
    label: 'Sign Out',
    icon: <SignOut />,
  },
]

export function App() {
  const [check, setCheck] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)

  const onChangeHandler = (value: string) => {
    setTextInput(value)
  }

  const onClickItem = (item: DataItem) => {
    Boolean(item.id === '3') && setIsAuthorized(false)
  }

  return (
    <div className={s.container}>
      <Card className={s.card}>
        <Button variant={'primary'}>Primary button</Button>
        <Typography>asdwasd</Typography>
        <Typography as={'span'} variant={'body2'}>
          asdwasd
        </Typography>

        <Checkbox checked={check} onChange={() => setCheck(prev => !prev)} />

        <TextField value={textInput} type={'search'} onValueChange={onChangeHandler} />
      </Card>

      {isAuthorized ? (
        <DropDown
          label={'Name'}
          dataMenu={dataMenu}
          icon={
            <Avatar
              src={
                'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
              }
              name={'Vlad'}
            />
          }
          onClickItem={onClickItem}
        />
      ) : (
        <Button variant={'secondary'} onClick={() => setIsAuthorized(true)}>
          Sign In
        </Button>
      )}
    </div>
  )
}
