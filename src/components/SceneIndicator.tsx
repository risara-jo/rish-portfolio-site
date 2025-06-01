import React from 'react'

export default function SceneIndicator({ currentSection }: { currentSection: number }) {
  return (
    <div style={{
      position: 'fixed',
      top: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '12px',
      zIndex: 100,
      pointerEvents: 'none'
    }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: currentSection === i ? 'black' : 'transparent',
            border: '2px solid black',
            transition: 'all 0.3s ease-in-out'
          }}
        />
      ))}
    </div>
  )
}
