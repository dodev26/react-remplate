import React, { Suspense } from 'react'
import Routes from './routes'
import Loading from './components/loading'
import { AnimatePresence } from 'framer-motion'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence>
        <Routes />
      </AnimatePresence>
    </Suspense>
  )
}

export default App
