import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function ScrollManager({ onSectionChange }: { onSectionChange: (s: number) => void }) {
  const { camera } = useThree()

  const currentSection = useRef(0)
  const [target, setTarget] = useState({
    position: new THREE.Vector3(),
    lookAt: new THREE.Vector3(),
    fov: 50
  })

  // Camera movement using GSAP easing
  const moveCamera = (position: THREE.Vector3, lookAt: THREE.Vector3, fov: number) => {
    gsap.to(camera.position, {
      duration: 2,
      x: position.x,
      y: position.y,
      z: position.z,
      ease: "power2.inOut"
    })
    gsap.to(camera, {
      duration: 2,
      fov: fov,
      ease: "power2.inOut",
      onUpdate: () => camera.updateProjectionMatrix()
    })
    gsap.to(target.lookAt, {
      duration: 2,
      x: lookAt.x,
      y: lookAt.y,
      z: lookAt.z,
      ease: "power2.inOut"
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const section = Math.floor(scrollY / window.innerHeight)

      if (section !== currentSection.current) {
        currentSection.current = section
        onSectionChange(section)

        // Scene 1
        if (section === 0) {
          moveCamera(
            new THREE.Vector3(2.81, 7.6, 15.86),
            new THREE.Vector3(0, 4, 0),
            50
          )
        }

        // Scene 2
        if (section === 1) {
          moveCamera(
            new THREE.Vector3(100, -450, 50),
            new THREE.Vector3(0, 10, 0),
            40
          )
        }

        // Scene 3
        if (section === 2) {
          moveCamera(
            new THREE.Vector3(2.81, 100, 15.86),
            new THREE.Vector3(-1, 0, 2),
            55
          )
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [camera])

  // Update lookAt smoothly each frame
  useFrame(() => {
    camera.lookAt(target.lookAt)
  })

  return null
}
