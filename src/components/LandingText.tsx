// src/components/LandingText.tsx
import { Html } from '@react-three/drei'

export default function LandingText() {
  return (
    <Html fullscreen>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          fontFamily: 'monospace',
          color: 'black',
        }}
      >
        {/* Top-left greeting */}
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          lineHeight: '1.2',
        }}>
          Hi, I am <br />
          <span style={{ fontSize: '3rem' }}>Rishara Siriwardhana</span>
          <br /><br />
          <span style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
            // Copyright © 2025 <br />
            Rishara Siriwardhana. <br />
            All rights reserved.
          </span>
        </div>

        {/* Top-right manifesto */}
        <div style={{
          position: 'absolute',
          top: '50px',
          right: '60px',
          fontSize: '1.2rem',
          textAlign: 'right',
          lineHeight: '1.6',
        }}>
          <div style={{ fontWeight: 'bold' }}>//// manifesto</div>
          <br />
          A computer science undergraduate<br />
          passionate in 3d, web, UI/UX and<br />
          Full Stack Development.<br /><br />
          Also interested in Music production<br />
          sound design and photography.<br /><br />
          Welcome to my portfolio...
        </div>

        {/* Bottom-left sound toggle */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '60px',
          border: '2px solid black',
          padding: '8px 16px',
          fontSize: '1rem',
          background: 'white',
          width: 'fit-content',
          pointerEvents: 'auto'
        }}>
          Sound: on
        </div>

        {/* Bottom-center scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          fontSize: '1.1rem',
          fontWeight: 'bold',
        }}>
          Scroll down to discover
          <br />
          <span style={{ fontSize: '2rem' }}>↓</span>
        </div>
      </div>
    </Html>
  )
}
