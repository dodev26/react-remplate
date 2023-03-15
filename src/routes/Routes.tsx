import { useRoutes } from 'react-router-dom'
import Home from 'src/pages/home'

export default function Routes() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: <Home />
    },
    {
      path: '/about',
      element: <h1>about</h1>
    }
  ])
  return routeElements
}
