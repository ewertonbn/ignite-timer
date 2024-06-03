import { BrowserRouter } from 'react-router-dom'

import { ThemeContextProvider } from './context/ThemeContext'
import { CyclesContextProvider } from './hooks/useCycles'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeContextProvider>
  )
}
