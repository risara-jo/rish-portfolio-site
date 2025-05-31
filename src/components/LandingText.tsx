// src/components/LandingText.tsx
import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function LandingText() {
  const { camera } = useThree()
  const containerRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})

  // Follow camera smoothly (optional but more immersive)
  useFrame(() => {
    if (containerRef.current) {
      setStyle({
        transform: `translate3d(-50%, -50%, 0)`,
      })
    }
  })

  return (
    <>
      {/* Top Left Text */}
      <Html position={[-8, 8, -5]} style={{ pointerEvents: 'none' }} center>
        <div
          ref={containerRef}
          style={{
            ...style,
            position: 'absolute',
            top: '5%',
            left: '5%',
            color: 'white',
            fontSize: '1rem',
            fontFamily: 'monospace',
            lineHeight: 1.5,
            whiteSpace: 'pre-line',
            textAlign: 'left',
            maxWidth: '200px',
          }}
        >
          {'///// Manifesto\nMy mission is to build beautiful,\nimmersive web\nexperiences.\nBlending creativity,\ncode, and 3D to\nshape the web of\ntomorrow.'}
        </div>
      </Html>

      {/* Bottom Right Text */}
      <Html position={[0, 0, 0]} style={{ pointerEvents: 'none' }} center>
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            right: '5%',
            color: 'white',
            fontSize: '0.9rem',
            fontFamily: 'monospace',
            textAlign: 'right',
            whiteSpace: 'pre-line',
          }}
        >
          {'Rish\n© 2024\nALL Rights Reserved\n\nScroll down to discover.\n🔇 Sound: Off'}
        </div>
      </Html>
    </>
  )
}
