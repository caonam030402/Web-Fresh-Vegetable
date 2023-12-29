import { createContext } from 'react'

interface AppContextInterface {}

const initialAppContext: AppContextInterface = {}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

import React from 'react'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}
