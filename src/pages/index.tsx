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
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <LandingScene />
          <OrbitControls />
        </Canvas>
      </main>
    </>
  )
}
