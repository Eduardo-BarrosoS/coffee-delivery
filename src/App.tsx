import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextsProvider } from './contexts/CoffeesContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultThemes } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
        <CoffeeContextsProvider>
          <Router />
          <GlobalStyles />
        </CoffeeContextsProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
