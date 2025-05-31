// src/components/CameraDebugger.tsx
import { useThree, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useState } from 'react'

export default function CameraDebugger() {
  const { camera } = useThree()
  const [position, setPosition] = useState(camera.position.toArray())

  useFrame(() => {
    setPosition([...camera.position.toArray()])
  })

  return (
    <Html position={[0, 0, 0]}>
      <div
        style={{
          position: 'fixed',
          top: 10,
          left: 10,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '8px 12px',
          fontSize: '14px',
          fontFamily: 'monospace',
          borderRadius: '8px',
          zIndex: 1000,
        }}
      >
        <div>X: {position[0].toFixed(2)}</div>
        <div>Y: {position[1].toFixed(2)}</div>
        <div>Z: {position[2].toFixed(2)}</div>
      </div>
    </Html>
  )
}
