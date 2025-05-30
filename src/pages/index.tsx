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
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 20, 10]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
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
