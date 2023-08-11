import { Outlet } from 'react-router-dom'

import { Header } from './'

export const Layout = () => {
  return (
    <div>
      <Header isAuth={false} onSignOut={() => {}} />
      <div style={{ height: '30px' }} />
      <Outlet />
    </div>
  )
}
