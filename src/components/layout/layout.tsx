import { Outlet } from 'react-router-dom'

import { useLogoutMutation, useMeQuery } from '../../services/auth/auth'

import { Header } from './header'
import s from './layout.module.scss'

export const Layout = () => {
  const { data } = useMeQuery()
  const [logout] = useLogoutMutation()

  return (
    <>
      <Header
        isAuth={Boolean(data)}
        name={data?.name}
        email={data?.email}
        avatar={data?.avatar}
        onSignOut={logout}
      />

      <div className={s.container}>
        <Outlet />
      </div>
    </>
  )
}
