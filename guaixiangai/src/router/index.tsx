import { lazy } from 'react' 
import { Navigate, useRoutes } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../pages/home'))
const Game = lazy(() => import('../pages/game'))
const NotFount = lazy(() => import('../pages/notfount'))

export default function RoutesConfig() {
  const routes: RouteObject[] = [
    {
      path: '/',
      element:  <Home />
    },
    {
      path: '/game',
      element: <Game />
    },
    {
      path: '*', // 找不到
      element: <NotFount />
    }
  ]

  return useRoutes(routes)
} 
