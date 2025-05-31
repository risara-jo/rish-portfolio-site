import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function ScrollController() {
  const { camera } = useThree()
  const scrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    // Smooth camera movement based on scrollY
    const t = scrollY.current / window.innerHeight

    // Camera movement logic (adjust as needed)
    camera.position.y = 10 + t * 5  // move up as you scroll
    camera.position.z = 15 - t * 5  // move closer to the plane
    camera.lookAt(0, 0, 0)
  })

  return null
}
