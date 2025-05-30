import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LandingScene from '@/scenes/LandingScene'
import { AxesHelper } from 'three'
import { GridHelper } from 'three'

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

          {/* Debug helpers */}
        <gridHelper args={[1000, 1000]} />
        <axesHelper args={[10]} />
            {/* 
                Note: The ambient light is set to a higher intensity to brighten the scene.
                The directional light is positioned to cast shadows and illuminate the scene.
            */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 20, 10]} intensity={2} />

          <LandingScene />
          <OrbitControls />
        </Canvas>
      </main>
    </>
  )
}
