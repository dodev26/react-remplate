import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Animated from 'src/components/animated/Animated'
import path from 'src/constants/path'
import MainLayout from 'src/layout/MainLayout/MainLayout'
const Home = React.lazy(() => import('src/pages/home'))
const Products = React.lazy(() => import('src/pages/products'))

export default function Routes() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          index: true,
          element: (
            <Suspense>
              <Animated>
                <Home />
              </Animated>
            </Suspense>
          )
        },
        {
          path: path.products,
          element: (
            <Suspense>
              <Animated>
                <Products />
              </Animated>
            </Suspense>
          )
        }
      ]
    }
  ])
  return routeElements
}
// MainLayout
