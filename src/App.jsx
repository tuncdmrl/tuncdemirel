import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/AppRoutes.jsx'
import { ContentProvider } from './app/ContentProvider.jsx'
import { ThemeProvider } from './app/ThemeProvider.jsx'
import { LocaleProvider } from './i18n/LocaleProvider.jsx'

export default function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <ContentProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ContentProvider>
      </ThemeProvider>
    </LocaleProvider>
  )
}
