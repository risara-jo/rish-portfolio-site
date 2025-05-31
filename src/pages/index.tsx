// src/pages/index.tsx
import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import LandingScene from '@/scenes/LandingScene'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rish Portfolio</title>
      </Head>
      <main className="h-screen w-screen overflow-y-scroll">
        <Canvas
          shadows
          camera={{ position: [0, 10, 20], fov: 35 }}
          style={{ background: '#0f172a' }} // Dark blue-ish
        >
          <LandingScene />
        </Canvas>
        {/* Invisible height to enable scrolling */}
        <div style={{ height: '4000px' }} />
      </main>
    </>
  )
}
