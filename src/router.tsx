import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { PATH } from './common/constants/routePath'
import { Layout } from './components'
import { Decks, LoginPage, SignupPage } from './pages'
import { useMeQuery } from './services/auth/auth'

const publicRoutes: RouteObject[] = [
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PATH.REGISTRATION,
    element: <SignupPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.DECKS,
    element: <Decks />,
  },
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>...loading</div>

  const isAuthenticated = !!data

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
