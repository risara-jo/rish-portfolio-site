import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function ScrollManager({ onSectionChange }: { onSectionChange: (s: number) => void }) {
  const { camera } = useThree()
  const scrollRef = useRef(0)
  const currentSection = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      scrollRef.current = scrollY
      const section = Math.floor(scrollY / window.innerHeight)

      if (section !== currentSection.current) {
        currentSection.current = section
        onSectionChange(section)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [onSectionChange])

  useFrame(() => {
    const scroll = scrollRef.current

    if (scroll < window.innerHeight) {
      camera.position.lerp({ x: 2.81, y: 7.6, z: 15.86 }, 0.1)
      camera.lookAt(0, 0, 0)
    } else {
      camera.position.lerp({ x: 1.35, y: -138.37, z: 39.24 }, 0.1)
      camera.lookAt(0, 0, 0)
    }
  })

  return null
}
