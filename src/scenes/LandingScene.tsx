// src/scenes/LandingScene.tsx
import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import AnimeSky from '@/components/AnimeSky'
import AnimatedPlane from '@/components/AnimatedPlane'
import LandingText from '@/components/LandingText'

export default function LandingScene() {
  const { camera } = useThree()
  const scrollRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame(() => {
    const scrollY = scrollRef.current
    const angle = scrollY * 0.001

    const radius = 20
    camera.position.x = Math.sin(angle) * radius
    camera.position.z = 5+Math.cos(angle) * radius
    camera.position.y = 10 + Math.sin(angle * 0.5) * 10 // slight vertical curve
    camera.lookAt(0, 3, -5) 
  })

  return (
    <>
      <AnimeSky position={[0, 0, 0]} />
      <AnimatedPlane position={[-2, -2, -5]} scale={1.5} rotation={[0, -19, 0]} />
      <LandingText />
    </>
  )
}
