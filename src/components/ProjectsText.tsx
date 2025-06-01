'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function ProjectsText() {
  const [activeTab, setActiveTab] = useState<'cs' | 'other'>('cs')

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {}
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        fontFamily: 'monospace',
        color: 'black',
        pointerEvents: 'none',
        zIndex: 20,
        padding: '40px',
        boxSizing: 'border-box'
      }}
    >
      <motion.div variants={fadeInUp} style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
        My Projects
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{ marginTop: '20px', textAlign: 'center', pointerEvents: 'auto' }}
      >
        <button onClick={() => setActiveTab('cs')} style={buttonStyle(activeTab === 'cs')}>
          computer science projects
        </button>
        <button onClick={() => setActiveTab('other')} style={buttonStyle(activeTab === 'other')}>
          Other projects
        </button>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          pointerEvents: 'auto'
        }}
      >
        {activeTab === 'cs' && <>
          <ProjectCard title="BLuePrint mobile appLication" desc="Ai powered house planning tool, still in research. Working as a Full Stack developer." tags={['Python', 'Flutter', 'HuggingFace']} color="#3366ff" />
          <ProjectCard title="RealTime Ticket management app" desc="Show real time ticket sales and ticket pool updates." tags={['SpringBoot', 'React']} color="black" />
          <ProjectCard title="Resume-Analyzer" desc="A Resume analyzer that suggests best jobs for your skills" tags={['Node.js', 'React', 'MongoDB']} />
        </>}
        {activeTab === 'other' && <>
          <ProjectCard title="Retro Symphony" desc="A futuristic cyber-punk theme album in production state..." />
          <ProjectCard title="PLaceholder name" desc="photography projects" />
        </>}
      </motion.div>

      {activeTab === 'cs' && (
        <motion.div variants={fadeInUp} style={{ marginTop: '80px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', pointerEvents: 'auto' }}>
          Technologies I Use
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {['React', 'Next.js', 'Flutter', 'Spring Boot', 'Node.js', 'MongoDB', 'Python', 'TailwindCSS', 'Three.js', 'Java'].map((tech, i) => (
              <span key={i} style={{ background: '#000', color: '#fff', padding: '8px 14px', fontSize: '0.9rem', borderRadius: '4px' }}>{tech}</span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

function ProjectCard({ title, desc, tags, color }: { title: string, desc: string, tags?: string[], color?: string }) {
  return (
    <motion.div variants={fadeInUp} style={cardStyle}>
      {color && <div style={{ background: color, height: '100px', marginBottom: '10px' }} />}
      <strong>{title}</strong><br />
      {desc}<br />
      {tags && <TechTags tags={tags} />}
    </motion.div>
  )
}

function TechTags({ tags }: { tags: string[] }) {
  return (
    <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {tags.map((tag, i) => (
        <span key={i} style={{ background: '#444', color: 'white', padding: '4px 8px', fontSize: '0.8rem' }}>
          {tag}
        </span>
      ))}
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

const buttonStyle = (active: boolean) => ({
  padding: '10px 20px',
  marginRight: '10px',
  fontSize: '1rem',
  fontFamily: 'monospace',
  background: active ? 'black' : 'gray',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
})
