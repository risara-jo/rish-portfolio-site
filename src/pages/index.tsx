import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
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
            camera={{ position: [0, 5, 10], fov: 50 }}
            style={{ background: '#0a0a0a' }} // near-black background
            >

          {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight
            position={[15, 25, 15]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
            />


          {/* 🔆 Bloom Effect */}
          <EffectComposer>
            <Bloom
              intensity={0.2}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>

          {/* 📦 Scene Contents */}
          <LandingScene />

          {/* 🧭 Controls & Debug Helpers */}
          <OrbitControls />
          
        </Canvas>
      </main>
    </>
  )
}
