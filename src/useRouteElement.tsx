import { useRoutes } from 'react-router-dom'
import Detail from './pages/Detail'
import Home from './pages/Home'


export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/product/:id",
      element: <Detail />
    },

  ])
  return routeElement
}
