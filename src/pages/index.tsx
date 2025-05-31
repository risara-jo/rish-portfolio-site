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
      <main className="h-[300vh] w-screen"> {/* make page scrollable */}
        <Canvas
          shadows
          camera={{ position: [-10, 15, -20], fov: 25 }}
          style={{ background: 'transparent', height: '100vh', width: '100vw', position: 'fixed', top: 0 }}
        >
          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[0, 30, 10]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <hemisphereLight color={'white'} groundColor={'black'} intensity={0.5} />

          {/* Landing 3D Scene */}
          <LandingScene />
        </Canvas>
      </main>
    </>
  )
}
