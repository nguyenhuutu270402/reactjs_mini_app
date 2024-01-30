import React from 'react'
import { useRoutes } from 'react-router-dom'

const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyDetail = React.lazy(() => import('./pages/Detail'))


export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <LazyHome />
    },
    {
      path: "/detail/:id",
      element: <LazyDetail />
    },

  ])
  return routeElement
}
