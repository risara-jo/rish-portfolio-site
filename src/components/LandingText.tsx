import { Html } from '@react-three/drei'
import { useEffect, useState } from 'react'

export default function LandingText() {
  const [section, setSection] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const height = window.innerHeight
      const index = Math.floor(y / height)
      setSection(index)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const messages = [
    `///// Manifesto
My mission is to build beautiful,
immersive web
experiences.
Blending creativity,
code, and 3D to
shape the web of
tomorrow.`,
    `///// About Me
Full-stack dev.
React | Next.js | Three.js
Fast learner. 
Inspired by beautiful
digital experiences.`,
    `///// Projects
• Blueprint App
• AI Resume Analyzer
• SecureVault
• Nakano School System`,
  ]

  return (
    <Html position={[10, 5, -1]} center>
      <div
        style={{
          position: 'absolute',
          right: '5%',
          top: '10%',
          color: 'white',
          fontFamily: 'monospace',
          whiteSpace: 'pre-line',
          fontSize: '1.5rem',
          maxWidth: '220px',
          textAlign: 'left',
          pointerEvents: 'none',
        }}
      >
        {messages[section] || messages[messages.length - 1]}
      </div>
    </Html>
  )
}
