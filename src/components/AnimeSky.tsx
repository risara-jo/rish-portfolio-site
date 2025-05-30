import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/anime-sky.glb')

export default function AnimeSky(props: any) {
  const { scene } = useGLTF('/models/anime-sky.glb')
  return <primitive object={scene} {...props} />
}
