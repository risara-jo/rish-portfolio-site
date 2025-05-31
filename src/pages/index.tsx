import Head from 'next/head'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LandingScene from '@/scenes/LandingScene'
import { ScrollControls } from '@react-three/drei'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rish Portfolio</title>
      </Head>
      <main className="h-screen w-screen">
      <Canvas
        shadows
        camera={{ position: [-10, 15, -20], fov: 25 }} // ← updated
        style={{ background: 'transparent' }}
        >



          {/* Basic Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight
            position={[0, 30, 10]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <hemisphereLight color={'white'} groundColor={'black'} intensity={0.5} />


          {/* Only the plane scene */}
          <LandingScene />

          {/* REMOVE or comment out OrbitControls  and add scrolling effects*/}
          {/* <OrbitControls /> */}

          <ScrollControls pages={3} damping={0.25}>
          <LandingScene />
          </ScrollControls>
        </Canvas>
      </main>
    </>
  )
}
