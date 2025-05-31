import AnimeSky from '@/components/AnimeSky'
import AnimatedPlane from '@/components/AnimatedPlane'
import LandingText from '@/components/LandingText'

export default function LandingScene() {
  return (
    <>
      {/* 🌌 Render sky first */}
      <AnimeSky position={[0, 0, 0]} />

      {/* 🛩️ Plane */}
      <AnimatedPlane position={[0, 0, -5]} scale={1} rotation={[0, Math.PI, 0]} />

      {/* 📝 Text Overlays */}
      <LandingText />
    </>
  )
}
