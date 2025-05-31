// src/pages/index.tsx
import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LandingScene from '@/scenes/LandingScene'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rish Portfolio</title>
      </Head>
      <main className="h-screen w-screen">
        <Canvas
          shadows
          camera={{ position: [0, 10, 20], fov: 35 }}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          {/* Re-enable OrbitControls for design work */}
          <OrbitControls enableZoom={false} enablePan={false} />
          <LandingScene />
        </Canvas>

        {/* This is your scroll area that triggers camera sections */}
        <div style={{ height: '4000px', position: 'relative', zIndex: 10 }} />
      </main>
    </>
  )
}
