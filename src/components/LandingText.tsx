export default function LandingText() {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          fontFamily: 'monospace',
          color: 'black',
          zIndex: 20,
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
          <div>Hi, I am</div>
          <div style={{ fontSize: '3rem' }}>Rishara Siriwardhana</div>
          <div style={{ height: '20px' }} />
          <div style={{ fontSize: '0.9rem', fontWeight: 'normal' }}>
            <div>// Copyright © 2025</div>
            <div>Rishara Siriwardhana.</div>
            <div>All rights reserved.</div>
          </div>
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
          <div>A computer science undergraduate</div>
          <div>passionate in 3d, web, UI/UX and</div>
          <div>Full Stack Development.</div>
          <div style={{ height: '16px' }} />
          <div>Also interested in Music production</div>
          <div>sound design and photography.</div>
          <div style={{ height: '16px' }} />
          <div>Welcome to my portfolio...</div>
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
          <div>Scroll down to discover</div>
          <div style={{ fontSize: '2rem' }}>↓</div>
        </div>
      </div>
    )
  }
  