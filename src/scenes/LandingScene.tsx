import GroundScene from '@/components/GroundScene'
import Rocks from '@/components/Rocks'
import Portal from '@/components/Portal'


export default function LandingScene() {
  return (
    <>
      {/* 🏜️ Ground Diorama Model */}
      <GroundScene scale={0.5} position={[0, -5, 0]} />

        {/* 🪨 Portal Model */}
      <Portal position={[0, -20, 0]} scale={20} />
      <Portal position={[0, -20, 0]} scale={20} rotation={[0, Math.PI / 270, 0]} />

    </>
  )
}
