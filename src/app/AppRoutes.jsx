import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage.jsx'
import { Layout } from './Layout.jsx'

/** Rota tablosu. Yeni sayfa eklemek için buraya bir satır yetiyor. */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
