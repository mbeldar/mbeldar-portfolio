import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pastel.css';
import './AutoLogs.css';
import autoLogsIcon from '../assets/autologs-icon.svg';

const APP_STORE_URL = 'https://apps.apple.com/us/app/car-maintenance-log-autolog/id6777612793';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Car Maintenance Log :: AutoLog',
  alternateName: 'AutoLog',
  operatingSystem: 'iOS 26.2 or later',
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'Vehicle maintenance and service history',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'A private car maintenance log for iPhone that tracks service, fuel or charging, mileage, receipts, ownership costs, and complete vehicle history without an account.',
  url: 'https://mayurbeldar.com/autologs',
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  isAccessibleForFree: true,
  featureList: [
    'Vehicle maintenance and service history',
    'Fuel and electric charging log',
    'Mileage and odometer tracking',
    'Receipt photos and ownership costs',
    'Multiple vehicle support',
    'PDF vehicle history export',
    'Private on-device storage with no account',
  ],
  author: {
    '@type': 'Person',
    name: 'Mayur Beldar',
    url: 'https://mayurbeldar.com/',
  },
  sameAs: [APP_STORE_URL],
};

const faqs = [
  {
    q: 'Can I track car maintenance on iPhone without an account?',
    a: 'Yes. AutoLog stores your vehicle records on your iPhone and does not require an account or sign-in.',
  },
  {
    q: 'What can I record in a vehicle service history?',
    a: 'AutoLog records maintenance, fuel or charging, odometer readings, costs, notes, and receipt photos in one chronological vehicle history.',
  },
  {
    q: 'Can AutoLog track more than one vehicle?',
    a: 'Yes. You can keep separate histories for one vehicle or an entire garage and switch between them when adding or reviewing records.',
  },
  {
    q: 'Can I export my car maintenance records?',
    a: 'Yes. AutoLog can export a clear PDF vehicle history to share with a mechanic, a buyer, or anyone helping care for the vehicle.',
  },
  {
    q: 'Does AutoLog collect my vehicle data?',
    a: 'No. Your vehicle records remain on your device, and the App Store privacy label states that AutoLog does not collect data.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const AutoLogs: React.FC = () => {
  useEffect(() => {
    const title = 'AutoLog: Car Maintenance Log App for iPhone';
    const description =
      'Track service, fuel or charging, mileage, receipts, costs, and multiple vehicles with AutoLog, a private no-account car maintenance app for iPhone.';
    const canonicalUrl = 'https://mayurbeldar.com/autologs';

    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    const socialTags = [
      ['property', 'og:title', title],
      ['property', 'og:description', description],
      ['property', 'og:url', canonicalUrl],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', description],
    ];

    socialTags.forEach(([attribute, value, content]) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, []);

  return (
    <div className="autologs-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="autologs-hero" aria-label="Hero">
        <Link to="/" className="autologs-home-link" aria-label="Back to Mayur Beldar portfolio">
          MB / Portfolio
        </Link>
        <div className="autologs-hero-art" aria-hidden="true">
          <img src={autoLogsIcon} alt="" />
        </div>
        <div className="autologs-copy">
          <h1>AutoLog</h1>
          <p className="autologs-kicker">Every service. One clean history.</p>
          <p className="autologs-subtitle">
            A private, offline-first iPhone app for maintenance, mileage, and the details your
            future self will wish you had kept.
          </p>
          <div className="autologs-actions">
            <a className="autologs-cta-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              Try app
            </a>
            <a className="autologs-secondary-btn" href="#features">See features</a>
          </div>
        </div>
      </section>

      {/* SEARCH INTENT */}
      <section className="autologs-section autologs-discovery" id="car-maintenance-log" aria-labelledby="autologs-discovery-heading">
        <p className="autologs-section-label">Made for iPhone</p>
        <h2 id="autologs-discovery-heading">A private car maintenance log for the full life of every vehicle</h2>
        <p className="autologs-section-intro">
          AutoLog is a vehicle service history tracker for drivers who want reliable records
          without a spreadsheet or an account. Keep maintenance, mileage, fuel or charging,
          receipts, and ownership costs together from the first service to the next owner.
        </p>
        <div className="autologs-intent-grid">
          <article>
            <h3>Oil change and service tracker</h3>
            <p>Record oil changes, tire rotations, brakes, filters, battery checks, repairs, and upcoming service intervals.</p>
          </article>
          <article>
            <h3>Mileage, fuel, and ownership cost log</h3>
            <p>Track odometer readings, fill-ups or charging sessions, parking, tolls, washes, and other vehicle expenses.</p>
          </article>
          <article>
            <h3>Exportable vehicle service history</h3>
            <p>Attach receipt photos as you go, then export a clean PDF for a mechanic, buyer, or your own records.</p>
          </article>
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
          <li>
            <strong>Fuel &amp; Charging</strong>
            Log fill-ups or electric charging sessions with quantity, cost, date, and mileage.
          </li>
          <li>
            <strong>Receipts &amp; PDF Export</strong>
            Save receipt photos and export a clear history when it is time to share your records.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="autologs-section autologs-faq-section" id="faq" aria-labelledby="autologs-faq-heading">
        <p className="autologs-section-label">Common questions</p>
        <h2 id="autologs-faq-heading">AutoLog answers, without the fine print</h2>
        <dl className="autologs-faq">
          {faqs.map(({ q, a }) => (
            <div className="autologs-faq-item" key={q}>
              <dt>{q}</dt>
              <dd>{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* DOWNLOAD */}
      <div className="autologs-download">
        <h2>Keep the history. Skip the account.</h2>
        <p>AutoLog is available on iPhone. Your garage and service records stay on your device.</p>
        <a className="autologs-cta-btn" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          Try AutoLog
        </a>
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
