// src/components/GroundScene.tsx
import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'

export default function GroundScene(props: any) {
  const { scene } = useGLTF('/models/icicle/scene.gltf')

  // Load texture maps
  const [diffuse, normal, rough] = useTexture([
    '/textures/brown-mud-03/diffuse.png',
    '/textures/brown-mud-03/normal.png',
    '/textures/brown-mud-03/rough.png',
  ])

  // Apply textures to all child meshes
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        child.material.map = diffuse
        child.material.normalMap = normal
        child.material.roughnessMap = rough
        child.material.needsUpdate = true
      }
    })
  }, [scene, diffuse, normal, rough])

  return <primitive object={scene} {...props} />
}
