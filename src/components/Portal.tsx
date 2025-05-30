// src/components/Portal.tsx
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

        // Soften material to blend better
        if (child.material) {
          child.material.roughness = 0.6
          child.material.metalness = 0.1
          child.material.envMapIntensity = 0.4
        }
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} />
}
