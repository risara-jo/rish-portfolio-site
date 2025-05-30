import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

useGLTF.preload('/models/Warp-Portal.glb')

export default function Portal(props: any) {
  const { scene } = useGLTF('/models/Warp-Portal.glb')

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} />
}
