import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/Rocks-Stylized.glb')

export default function Rocks(props: any) {
  const { scene } = useGLTF('/models/Rocks-Stylized.glb')
  return <primitive object={scene} receiveShadow castShadow {...props} />

}
