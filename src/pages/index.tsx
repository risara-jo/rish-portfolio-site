import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'
import LandingScene from '@/scenes/LandingScene'
import ScrollManager from '@/components/ScrollManager'
import LandingText from '@/components/LandingText'
import ProjectsText from '@/components/ProjectsText'

export default function Home() {
  const [section, setSection] = useState(0)

  return (
    <>
      <Head>
        <title>Rish Portfolio</title>
      </Head>

      {/* ✅ UI Text Overlays (above Canvas) */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 20, pointerEvents: 'none' }}>
        {section === 0 && <LandingText />}
        {section === 1 && <ProjectsText />}
      </div>

      {/* ✅ Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 10, 20], fov: 35 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        <LandingScene />
        <ScrollManager onSectionChange={setSection} />
      </Canvas>

      {/* ✅ Scrollable Spacer Div — OUTSIDE Canvas */}
      <div style={{
        height: '4000px',
        position: 'relative',
        zIndex: 1,
        pointerEvents: 'auto',
      }} />
    </>
  )
}
