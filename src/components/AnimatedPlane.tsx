// src/components/AnimatedPlane.tsx
import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

export default function AnimatedPlane(props: any) {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF('/models/animated_plane/scene.gltf')
  const { actions } = useAnimations(animations, group)

  // Start the default animation (if exists)
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play()
    }
  }, [actions])



  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}
