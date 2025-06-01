export default function ContactText() {
    return (
      <div
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
          padding: '60px',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            pointerEvents: 'auto',
          }}
        >
          {/* Heading */}
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Get in touch</h1>
  
          {/* Contact Info Box */}
          <div
            style={{
              background: '#e5e5e5',
              border: '2px solid black',
              padding: '20px',
              fontSize: '1.1rem',
              width: 'fit-content',
            }}
          >
            <div>E-mail: risharajl11234@gmail.com</div>
            <div>Phone: +94(76) 403 0111</div>
          </div>
  
          {/* Contact Form */}
          <form
            style={{
              background: '#e5e5e5',
              border: '2px solid black',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <input placeholder="Name" style={inputStyle} />
            <input placeholder="E-mail" style={inputStyle} />
            <textarea placeholder="Message" rows={5} style={inputStyle} />
            <button type="submit" style={sendButtonStyle}>
              Send
            </button>
          </form>
        </div>
  
        {/* Social Icons Bottom-Right */}
        <div
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
            pointerEvents: 'auto',
          }}
        >
          <span style={socialIconStyle}>📷</span> {/* Instagram */}
          <span style={socialIconStyle}>✖</span> {/* Close/X */}
          <span style={socialIconStyle}>📘</span> {/* Facebook */}
        </div>
      </div>
    )
  }
  
  const inputStyle = {
    background: '#e5e5e5',
    border: '2px solid black',
    padding: '10px',
    fontFamily: 'monospace',
    fontSize: '1rem',
    width: '100%',
  }
  
  const sendButtonStyle = {
    background: 'black',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    cursor: 'pointer',
  }
  
  const socialIconStyle = {
    fontSize: '1.5rem',
    cursor: 'pointer',
  }
  