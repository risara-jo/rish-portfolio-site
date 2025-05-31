// src/components/AnimeSky.tsx
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

useGLTF.preload('/models/skybox-anime.glb')

export default function AnimeSky(props: any) {
  const { scene } = useGLTF('/models/skybox-anime.glb')

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
  // ensures we see it from inside
        child.material.depthWrite = false     // avoid occlusion by it
      }
    })
  }, [scene])

  return (
    <primitive
      object={scene}
      scale={[1, 1, 1]}              // try smaller scale for testing first
      position={[0, 0, 0]}            // push it behind the plane
      {...props}
    />
  )
}
