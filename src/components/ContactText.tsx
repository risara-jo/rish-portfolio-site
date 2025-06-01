'use client'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function ContactText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.25 } },
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
        padding: '60px'
      }}
    >
      <motion.div
        variants={fadeInUp}
        style={{
          maxWidth: '800px',
          left: '60px',
          top: '60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          pointerEvents: 'auto'
        }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Get in touch</h1>

        <motion.div variants={fadeInUp} style={{ background: '#e5e5e5', border: '2px solid black', padding: '20px', fontSize: '1.1rem', width: 'fit-content' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Contact information</div>
          <div><strong>E-mail:</strong> risharajl11234@gmail.com</div>
          <div><strong>Phone:</strong> +94(76) 403 0111</div>
        </motion.div>

        <motion.form
          variants={fadeInUp}
          style={{
            background: '#e5e5e5',
            border: '2px solid black',
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>Send me a message...</h3>
          <input placeholder="Name" style={inputStyle} />
          <input placeholder="E-mail" style={inputStyle} />
          <textarea placeholder="Message" rows={6} style={inputStyle} />
          <button type="submit" style={sendButtonStyle}>Send</button>
        </motion.form>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          border: '2px solid black',
          background: '#e5e5e5',
          padding: '12px 24px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto'
        }}
      >
        <span style={socialIconStyle}>📷</span>
        <span style={socialIconStyle}>✖</span>
        <span style={socialIconStyle}>📘</span>
      </motion.div>
    </motion.div>
  )
}

const inputStyle = {
  background: '#e5e5e5',
  border: '2px solid black',
  padding: '10px',
  fontFamily: 'monospace',
  fontSize: '1rem',
  width: '96%'
}

const sendButtonStyle = {
  background: 'black',
  color: 'white',
  border: 'none',
  padding: '12px',
  fontSize: '1rem',
  fontWeight: 'bold',
  fontFamily: 'monospace',
  cursor: 'pointer'
}

const socialIconStyle = {
  fontSize: '1.5rem',
  cursor: 'pointer'
}
