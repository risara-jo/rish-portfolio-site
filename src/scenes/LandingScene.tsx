import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Plane } from '@react-three/drei'

export default function LandingScene() {
  const boxRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  // rotate the box slowly
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01
    }
  })

  return (
    <>
      {/* Lawn Ground */}
      <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#1a3c2c" />
      </Plane>

      {/* Central Futuristic Box */}
      <Box
        ref={boxRef}
        args={[2, 2, 2]}
        position={[0, 1, 0]}
        castShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial color={hovered ? '#00ffff' : '#4444ff'} />
      </Box>
    </>
  )
}
