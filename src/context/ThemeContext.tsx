import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../styles/themes/default'
import { lightTheme } from '../styles/themes/light'

interface ThemeContextProps {
  changeTheme: () => void
  selectedTheme: string
}

type ThemeContextProviderProps = PropsWithChildren

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const storedTheme = localStorage.getItem('@ignite-timer:theme-state-1.0.0')

    if (storedTheme) {
      return JSON.parse(storedTheme)
    } else {
      return 'dark'
    }
  })

  function changeTheme() {
    setSelectedTheme((state: string) => (state === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const storedTheme = JSON.stringify(selectedTheme)

    localStorage.setItem('@ignite-timer:theme-state-1.0.0', storedTheme)
  }, [selectedTheme])

  return (
    <ThemeContext.Provider value={{ selectedTheme, changeTheme }}>
      <ThemeProvider
        theme={selectedTheme === 'dark' ? defaultTheme : lightTheme}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
