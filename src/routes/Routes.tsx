import { useRoutes } from 'react-router-dom'

export default function Routes() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <h1>home</h1>
    },
    {
      path: '/about',
      element: <h1>about</h1>
    }
  ])
  return routeElements
}
