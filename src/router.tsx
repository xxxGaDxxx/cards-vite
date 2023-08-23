import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from './components'
import { Decks } from './pages/decks/decks'
import { LoginPage } from './pages/login'
import { useMeQuery } from './services/auth/auth'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
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

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
