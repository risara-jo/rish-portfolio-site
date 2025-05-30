import { useGLTF } from '@react-three/drei'

export default function AnimeCharacter(props: any) {
  const { scene } = useGLTF('/models/anime-character.glb')
  return <primitive object={scene} {...props} />
}
