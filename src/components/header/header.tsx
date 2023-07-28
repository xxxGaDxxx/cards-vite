import { useState } from 'react'

import { LogoIncubator, Profile, SignOut } from '../../assets/icons'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import { DataItem, DropDown } from '../ui/dropDown'

import s from './header.module.scss'

export const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)

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

  const onClickItem = (item: DataItem) => {
    Boolean(item.id === '3') && setIsAuthorized(false)
  }

  return (
    <header className={s.root}>
      <div className={s.container}>
        <LogoIncubator />
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
    </header>
  )
}
