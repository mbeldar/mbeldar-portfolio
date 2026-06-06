import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pastel.css';
import './AutoLogs.css';
import autoLogsIcon from '../assets/autologs-icon.svg';
import appBadge from '../assets/available-on-the-app-store.svg';

const APP_STORE_URL = '#'; // placeholder — link coming soon

const AutoLogs: React.FC = () => {
  useEffect(() => {
    document.title = 'AutoLogs — Vehicle Maintenance Tracker for iPhone';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content =
      'AutoLogs is an iOS app to track your vehicle maintenance, mileage, and service history — all offline and private. Coming soon to the App Store.';
  }, []);

  return (
    <div className="autologs-root">

      {/* HERO */}
      <section className="autologs-hero" aria-label="Hero">
        <img
          src={autoLogsIcon}
          alt="AutoLogs app icon"
          className="autologs-icon"
        />
        <div className="autologs-copy">
          <span className="autologs-platform">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            iOS Only
          </span>
          <h1>AutoLogs — Vehicle Maintenance Tracker</h1>
          <p className="autologs-subtitle">
            Keep every oil change, tire rotation, and service record in one place — no account,
            no subscription. AutoLogs is a private, offline-first iPhone app that helps you stay
            on top of your vehicle's health and history.
          </p>
          <a
            className="autologs-cta-btn"
            href={APP_STORE_URL}
            aria-label="Download AutoLogs on the App Store (coming soon)"
          >
            Coming Soon — App Store
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="autologs-section" id="features" aria-labelledby="al-features-heading">
        <h2 id="al-features-heading">Features</h2>
        <ul className="autologs-features">
          <li>
            <strong>Service History</strong>
            Log every maintenance event with date, mileage, cost, and notes.
          </li>
          <li>
            <strong>Mileage Tracking</strong>
            Track odometer readings and get reminders based on intervals.
          </li>
          <li>
            <strong>Multiple Vehicles</strong>
            Manage a full garage — cars, motorcycles, or anything with wheels.
          </li>
          <li>
            <strong>No Account Required</strong>
            Everything stays on your device. Your data is never sent to a server.
          </li>
          <li>
            <strong>Offline First</strong>
            Works without any internet connection, always.
          </li>
          <li>
            <strong>Dark &amp; Light Mode</strong>
            Polished themes that follow your system preference.
          </li>
        </ul>
      </section>

      {/* DOWNLOAD */}
      <div className="autologs-download">
        <p>AutoLogs is coming soon to the App Store — iOS only.</p>
        <span
          className="autologs-badge-link"
          aria-label="App Store link coming soon"
        >
          <img src={appBadge} alt="Available on the App Store" />
        </span>
        <br />
        <span className="autologs-coming-soon">Available soon</span>
      </div>

      {/* FOOTER LINKS */}
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginBottom: 40 }}>
        <Link to="/autologs/legal" style={{ color: 'rgba(138,180,232,0.6)', textDecoration: 'underline' }}>
          Terms &amp; Conditions
        </Link>
      </p>

    </div>
  );
};

export default AutoLogs;
