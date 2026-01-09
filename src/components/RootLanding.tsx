import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/RootLanding.css';

const RootLanding: React.FC = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="glow">Welcome — Explore Apps</h1>
        <p className="subtitle">A tiny collection of projects and experiments.</p>

        <div className="apps">
          <Link to="/nond" className="app-card">
            <div className="app-title">Nond</div>
            <div className="app-desc">Open the Nond app. An iOS App.</div>
          </Link>

          <Link to="/profile" className="app-card secondary">
            <div className="app-title">Profile</div>
            <div className="app-desc">My Work Profile</div>
          </Link>
        </div>
      </div>

      <div className="floating-blobs" aria-hidden>
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
    </div>
  );
};

export default RootLanding;
