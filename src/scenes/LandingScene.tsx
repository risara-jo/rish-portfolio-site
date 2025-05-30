import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Circle, Plane, Sphere } from '@react-three/drei' // add Sphere
import AnimeCharacter from '@/components/AnimeCharacter'
import AnimeSky from '@/components/AnimeSky'

export default function LandingScene() {
  const charRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (charRef.current) {
      
      charRef.current.scale.setScalar(hovered ? 1.2 : 1.0)
    }
  })

  return (
    <>
      {/* 🔆 Glowing Sun */}
      <Circle args={[10, 64, 64]} position={[0, -5, -15]}>
        <meshStandardMaterial emissive="#FFA500" emissiveIntensity={2} color="#FFA500" />
      </Circle>
      

      {/* ✅ Lawn Ground */}
      <Plane args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#1a3c2c" />
      </Plane>

      {/* 🎎 Anime Character */}
      <group
        ref={charRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <AnimeCharacter scale={5} />
      </group>
    </>
  )
}
