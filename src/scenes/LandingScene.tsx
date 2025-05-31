import AnimeSky from '@/components/AnimeSky'
import AnimatedPlane from '@/components/AnimatedPlane'

export default function LandingScene() {
  return (
    <>
      {/* 🌌 Render sky first so it doesn’t get occluded */}
      <AnimeSky position={[0, 0, 0]} />

      {/* 🛩️ Plane */}
      <AnimatedPlane position={[0, 0, 0]}/>
    </>
  )
}
