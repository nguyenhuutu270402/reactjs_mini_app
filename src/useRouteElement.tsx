import React from 'react'
import { useRoutes } from 'react-router-dom'

const LazyLogin = React.lazy(() => import('./pages/Home'))

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <LazyLogin />
    },

  ])
  return routeElement
}
