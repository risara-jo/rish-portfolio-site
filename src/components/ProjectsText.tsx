import { useState } from 'react'

export default function ProjectsText() {
  const [activeTab, setActiveTab] = useState<'cs' | 'other'>('cs')

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      fontFamily: 'monospace',
      color: 'black',
      pointerEvents: 'none',
      zIndex: 20
    }}>
      {/* Title */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
        My Projects
      </div>

      {/* Tabs */}
      <div style={{
        position: 'absolute',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        pointerEvents: 'auto'
      }}>
        <button
          onClick={() => setActiveTab('cs')}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            fontFamily: 'monospace',
            background: activeTab === 'cs' ? 'black' : 'gray',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>
          computer science projects
        </button>
        <button
          onClick={() => setActiveTab('other')}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            fontFamily: 'monospace',
            background: activeTab === 'other' ? 'black' : 'gray',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>
          Other projects
        </button>
      </div>

      {/* Project Cards */}
      <div style={{
        position: 'absolute',
        top: '180px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'center',
        pointerEvents: 'auto'
      }}>
        {activeTab === 'cs' && <>
          <div style={cardStyle}>
            <div style={{ background: '#3366ff', height: '100px', marginBottom: '10px' }} />
            <strong>BLuePrint mobile appLication</strong><br />
            Ai powered house planning tool, still in the research level. Working as a Full Stack developer.<br />
            <TechTags tags={['Python', 'Flutter', 'HuggingFace']} />
          </div>
          <div style={cardStyle}>
            <div style={{ background: 'black', height: '100px', marginBottom: '10px' }} />
            <strong>RealTime Ticket management app</strong><br />
            Show real time ticket sales and ticket pool updates.<br />
            <TechTags tags={['SpringBoot', 'React']} />
          </div>
          <div style={cardStyle}>
            <strong>Resume-Analyzer</strong><br />
            A Resume analyzer that suggests best jobs for your skills<br />
            <TechTags tags={['Node.js', 'React', 'MongoDB']} />
          </div>
        </>}
        {activeTab === 'other' && <>
          <div style={cardStyle}>
            <strong>Retro Symphony</strong><br />
            A futuristic cyber-punk theme album in production state...
          </div>
          <div style={cardStyle}>
            <strong>PLaceholder name</strong><br />
            photography projects
          </div>
        </>}
      </div>
    </div>
  )
}

const cardStyle = {
  width: '250px',
  padding: '20px',
  background: '#eee',
  border: '1px solid black',
  fontSize: '0.95rem'
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {tags.map((tag, i) => (
        <span key={i} style={{
          background: '#444',
          color: 'white',
          padding: '4px 8px',
          fontSize: '0.8rem'
        }}>
          {tag}
        </span>
      ))}
    </div>
  )
}
