// src/components/Skybox.tsx
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Skybox(props: any) {
  const texture = useLoader(TextureLoader, '/textures/starfield.jpg')

  return (
    <mesh {...props} scale={500}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial map={texture} side={1} />
    </mesh>
  )
}
