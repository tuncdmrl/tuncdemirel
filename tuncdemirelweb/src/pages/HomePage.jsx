import { About } from '../components/sections/About.jsx'
import { CapabilityMatrix } from '../components/sections/CapabilityMatrix.jsx'
import { CommsPanel } from '../components/sections/CommsPanel.jsx'
import { EducationTrack } from '../components/sections/EducationTrack.jsx'
import { Hero } from '../components/sections/Hero.jsx'
import { MissionLog } from '../components/sections/MissionLog.jsx'
import { PayloadBay } from '../components/sections/PayloadBay.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export function HomePage() {
  useDocumentTitle()

  return (
    <>
      <Hero />
      <About />
      <MissionLog />
      <PayloadBay />
      <CapabilityMatrix />
      <EducationTrack />
      <CommsPanel />
    </>
  )
}
