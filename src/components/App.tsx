import React from 'react';
import '../assets/css/Pastel.css';
import ProfilePicture from './ProfilePic';
import TypingEffect from './TypingEffect';

const App: React.FC = () => {
  const handleTypingComplete = () => {};

  // Clean, professional card layout for all screen sizes
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background-color)' }}>
      <div style={{
        maxWidth: 370,
        width: '100%',
        padding: '28px 20px 24px 20px',
        border: '1px solid #222',
        borderRadius: 12,
        background: '#111',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18
      }}>
        <ProfilePicture />
        <h1 style={{ margin: '12px 0 0 0', fontSize: '1.7em', color: 'var(--text-color)', fontWeight: 600, letterSpacing: '-0.5px', textAlign: 'center' }}>Mayur Beldar</h1>
        <div style={{ width: '100%', textAlign: 'center', minHeight: 40, fontSize: '1.05em', color: '#bbb' }}>
          <TypingEffect text="Sr. Software Development Engineer with a strong product mindset." onComplete={handleTypingComplete} speed={40} initialDelay={1000} />
        </div>
        <div style={{ width: '100%', marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <a style={{
            width: '100%',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#fff',
            background: 'none',
            border: '1px solid #333',
            borderRadius: 6,
            padding: '8px 0',
            fontWeight: 500,
            fontSize: '1em',
            transition: 'background 0.2s',
            marginBottom: 2
          }}
            href="https://www.linkedin.com/in/mayurbeldar/" target="_blank" rel="noopener noreferrer"
            onMouseOver={e => (e.currentTarget.style.background = '#191919')}
            onMouseOut={e => (e.currentTarget.style.background = 'none')}
          >LinkedIn</a>
          <a style={{
            width: '100%',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#fff',
            background: 'none',
            border: '1px solid #333',
            borderRadius: 6,
            padding: '8px 0',
            fontWeight: 500,
            fontSize: '1em',
            transition: 'background 0.2s',
            marginBottom: 2
          }}
            href="https://github.com/mbeldar" target="_blank" rel="noopener noreferrer"
            onMouseOver={e => (e.currentTarget.style.background = '#191919')}
            onMouseOut={e => (e.currentTarget.style.background = 'none')}
          >GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default App;
