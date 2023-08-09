import { Link, useNavigate } from 'react-router-dom'

import { LogoIncubator, Profile, SignOut } from '../../../assets/icons'
import { Avatar, Button, DropDown, DropdownItem, DropdownItemWithIcon, Typography } from '../../ui'

import s from './header.module.scss'

type HeaderPropsType = {
  isAuth: boolean
  name?: string
  avatar?: string
  email?: string
  onSignOut: () => void
}

export const Header = ({ isAuth, name = 'NoName', avatar, email, onSignOut }: HeaderPropsType) => {
  const navigate = useNavigate()

  //TODO navigate
  return (
    <div className={s.main}>
      <div className={s.container}>
        <div className={s.logo}>
          <Button variant={'link'} as={Link} to={'/'}>
            <LogoIncubator />
          </Button>
        </div>
        <div className={s.rightItem}>
          {!isAuth ? (
            <div className={s.button}>
              <Button onClick={() => navigate('/login')} variant="primary">
                Sign In
              </Button>
            </div>
          ) : (
            <div className={s.userTrigger}>
              <Typography variant="subtitle1" className={s.userName}>
                {name}
              </Typography>

              <DropDown
                trigger={
                  <button>
                    <Avatar src={avatar} name={name} />
                  </button>
                }
              >
                <DropdownItem onSelect={() => alert(name)}>
                  <div className={s.userInfoContainer}>
                    <Avatar src={avatar} name={name} />
                    <div className={s.userDetails}>
                      <Typography variant="subtitle2">{name}</Typography>
                      <Typography variant="caption" className={s.userEmail}>
                        {email}
                      </Typography>
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItemWithIcon
                  icon={<Profile />}
                  text="Profile"
                  onSelect={() => navigate('/profile')}
                />
                <DropdownItemWithIcon icon={<SignOut />} text="Sign out" onSelect={onSignOut} />
              </DropDown>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
