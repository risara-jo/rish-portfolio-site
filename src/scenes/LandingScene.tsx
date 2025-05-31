// src/scenes/LandingScene.tsx
import { useEffect, useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import AnimeSky from '@/components/AnimeSky'
import AnimatedPlane from '@/components/AnimatedPlane'
import LandingText from '@/components/LandingText'
import * as THREE from 'three'

export default function LandingScene() {
  const { camera } = useThree()
  const scrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    const scrollY = scrollRef.current
    const targetY = 15 + scrollY * 0.01
    const targetZ = -20 + scrollY * 0.02
    camera.position.set(-10, targetY, targetZ)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
  })

  return (
    <>
      <AnimeSky position={[0, 0, 0]} />
      <AnimatedPlane position={[0, 0, -5]} scale={1} rotation={[0, Math.PI, 0]} />
      <LandingText />
    </>
  )
}
