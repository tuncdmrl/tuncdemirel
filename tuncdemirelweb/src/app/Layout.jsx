import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer.jsx'
import { Navbar } from '../components/layout/Navbar.jsx'
import { SectionRail } from '../components/layout/SectionRail.jsx'
import { StationBackdrop } from '../components/layout/StationBackdrop.jsx'

/** Rota değişince doğru yere konumlanır: bağlantıdaki bölüme ya da sayfa başına. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <>
      <StationBackdrop />
      <ScrollManager />
      <Navbar />
      <SectionRail />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
