// src/components/FallingParticles.tsx
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FallingParticles({ count = 150 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        Math.random() * 40 + 10, // start higher up
        (Math.random() - 0.5) * 50
      ),
      scale: Math.random() * 0.15 + 0.05,
      speedY: Math.random() * 0.02 + 0.01,
      driftX: (Math.random() - 0.5) * 0.005,
      driftZ: (Math.random() - 0.5) * 0.005,
    }))
  }, [count])

  useFrame(() => {
    particles.forEach((p, i) => {
      p.position.y -= p.speedY
      p.position.x += p.driftX
      p.position.z += p.driftZ

      if (p.position.y < 0) {
        p.position.y = Math.random() * 30 + 10
        p.position.x = (Math.random() - 0.5) * 50
        p.position.z = (Math.random() - 0.5) * 50
      }

      dummy.position.copy(p.position)
      dummy.scale.setScalar(p.scale)
      dummy.updateMatrix()
      meshRef.current?.setMatrixAt(i, dummy.matrix)
    })

    if (meshRef.current) {
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 6, 6]} />
      <meshStandardMaterial color="#ffffff" emissive="#aaa" emissiveIntensity={0.4} />
    </instancedMesh>
  )
}
