import { createContext, useState } from 'react'

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
  const [darkMode, setDarkMode] = useState<boolean>(initialState.darkMode)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState.isAuthenticated)
  const value = {
    darkMode,
    isAuthenticated
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
