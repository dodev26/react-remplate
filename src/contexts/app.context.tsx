import { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface IAppcontext {
  isAuthenticated: boolean
  darkMode: boolean
}
const initialState: IAppcontext = {
  darkMode: false,
  isAuthenticated: false
}
export const AppContext = createContext<IAppcontext>(initialState)

const AppProvider = ({ children }: { children: React.ReactNode; defaultValue?: IAppcontext }) => {
  const [darkMode] = useState<boolean>(initialState.darkMode)
  const [isAuthenticated] = useState<boolean>(initialState.isAuthenticated)
  const location = useLocation()
  const value = {
    darkMode,
    isAuthenticated
  }

  useEffect(() => {
    if (location.pathname && !location.search) {
      scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [location.pathname])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
