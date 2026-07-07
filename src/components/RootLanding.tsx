import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/RootLanding.css';
import FloatingBlobs from './FloatingBlobs';

const RootLanding: React.FC = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="glow">Welcome — Explore Apps</h1>
        <p className="subtitle">A tiny collection of projects and experiments.</p>

        <div className="apps">
          <Link to="/nond" className="app-card">
            <div className="app-title">Nond</div>
            <div className="app-desc">Open the Nond - An iOS App.</div>
          </Link>

          <Link to="/autologs" className="app-card" style={{ background: 'linear-gradient(180deg, rgba(13,27,46,0.9), rgba(13,27,46,0.7))', borderTop: '1px solid rgba(138,180,232,0.18)' }}>
            <div className="app-title" style={{ color: '#8ab4e8' }}>AutoLogs</div>
            <div className="app-desc">Vehicle maintenance tracker — iOS</div>
          </Link>

          <Link
            to="/paper-trail"
            className="app-card"
            style={{
              background: 'linear-gradient(180deg, rgba(96,90,124,0.92), rgba(55,51,72,0.78))',
              borderTop: '1px solid rgba(253,213,227,0.26)'
            }}
          >
            <div className="app-title" style={{ color: '#fdd5e3' }}>Paper Trail</div>
            <div className="app-desc">Local-first document photo organizer.</div>
          </Link>

          <Link to="/profile" className="app-card secondary">
            <div className="app-title">Profile</div>
            <div className="app-desc">My Work Profile</div>
          </Link>

          <Link
            to="/pet-a-grizzly"
            className="app-card"
            style={{
              background: 'linear-gradient(180deg, rgba(73,42,24,0.92), rgba(36,22,13,0.82))',
              borderTop: '1px solid rgba(255,214,153,0.22)'
            }}
          >
            <div className="app-title" style={{ color: '#ffd79f' }}>Pet A Grizzly</div>
            <div className="app-desc">A terrible plan presented with great confidence.</div>
          </Link>
        </div>
      </div>

      <FloatingBlobs />
    </div>
  );
};

export default RootLanding;
