import { BrowserRouter } from 'react-router-dom'

import { CyclesContextProvider } from './context/CyclesContext'
import { ThemeContextProvider } from './context/ThemeContext'
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
