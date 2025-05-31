// src/components/ScrollManager.tsx
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export default function ScrollManager() {
  const { camera } = useThree()
  const scrollRef = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    const scroll = scrollRef.current

    // SECTION 1: Top (0–300)
    if (scroll < 300) {
      camera.position.lerp({ x: -10, y: 15, z: -20 }, 0.1)
      camera.lookAt(0, 0, -5)
    }

    // SECTION 2: Middle (300–800)
    else if (scroll < 800) {
      camera.position.lerp({ x: 0, y: 10, z: -10 }, 0.1)
      camera.lookAt(0, 0, -5)
    }

    // SECTION 3: Bottom (800+)
    else {
      camera.position.lerp({ x: 10, y: 5, z: 0 }, 0.1)
      camera.lookAt(0, 0, -5)
    }
  })

  return null
}
