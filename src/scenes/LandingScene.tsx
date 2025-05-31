import AnimatedPlane from '@/components/AnimatedPlane'

export default function LandingScene() {
  return (
    <>
      {/* 🛩️ Only the animated plane for now */}
      <AnimatedPlane position={[0, 2, 0]} scale={0.8} />
    </>
  )
}
