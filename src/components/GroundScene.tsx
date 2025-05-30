// src/components/Ground.tsx
import { useGLTF } from '@react-three/drei'

export default function Ground(props: any) {
  const { scene } = useGLTF('/models/icicle/scene.gltf')
  return <primitive object={scene} {...props} />
}
