import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/RootLanding.css';
import portrait from '../assets/pic.jpg';

const experience = [
  {
    years: '2026 — now',
    company: 'Upstart',
    role: 'Senior Software Engineer',
    detail: 'Building software at Upstart.',
  },
  {
    years: '2023 — 2026',
    company: 'Expedia Group',
    role: 'Senior Software Engineer',
    detail:
      'Leading distributed travel-platform work across search and checkout, with a focus on flexible packaging, partner integrations, and operational reliability.',
  },
  {
    years: '2020 — 2023',
    company: 'Twilio',
    role: 'Software Engineer II',
    detail:
      'Built resilient systems for Twilio Functions, including a zero-downtime database migration for a platform serving one billion requests a month.',
  },
  {
    years: '2018 — 2020',
    company: 'Walmart',
    role: 'Software Engineer',
    detail:
      'Modernized high-traffic commerce systems through cloud migration and reusable service architecture.',
  },
];

const apps = [
  {
    name: 'Nond',
    kind: 'iOS · Available',
    detail: 'A private meal planner that turns recipes into a useful grocery list.',
    to: '/nond',
    tone: 'mint',
  },
  {
    name: 'AutoLog',
    kind: 'iOS · Available',
    detail: 'Vehicle maintenance and service history, kept locally on your phone.',
    to: '/autologs',
    tone: 'blue',
  },
  {
    name: 'paper.trail',
    kind: 'iOS · In progress',
    detail: 'A calmer place for the document photos hiding in your camera roll.',
    to: '/paper-trail',
    tone: 'rose',
  },
];

const RootLanding: React.FC = () => {
  useEffect(() => {
    document.title = 'Mayur Beldar — Senior Software Engineer';

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content =
      'Mayur Beldar is a senior software engineer focused on backend systems, distributed architecture, reliability, and thoughtful product work.';

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://mayurbeldar.com/';
  }, []);

  return (
    <main className="portfolio-page">
      <section
        className="portfolio-hero"
        aria-labelledby="portfolio-title"
        style={{ '--portrait': `url(${portrait})` } as React.CSSProperties}
      >
        <div className="portfolio-hero-shade" aria-hidden="true" />
        <div className="portfolio-hero-content">
          <h1 id="portfolio-title">Mayur Beldar</h1>
          <p className="portfolio-role">Senior Software Engineer · Backend &amp; Distributed Systems</p>
          <p className="portfolio-intro">
            Currently at Upstart. Previously Expedia, Twilio, and Walmart.
          </p>
          <div className="portfolio-actions" aria-label="Contact links">
            <a href="mailto:mayur.beldar16@gmail.com">Email me</a>
            <a href="https://www.linkedin.com/in/mayurbeldar/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <a className="portfolio-scroll" href="#work" aria-label="Scroll to selected work">
          Selected work <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="portfolio-section portfolio-work" id="work" aria-labelledby="work-title">
        <div className="portfolio-section-heading">
          <p>Experience</p>
          <h2 id="work-title">Eight years of making complex systems simpler to operate.</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row" key={item.company}>
              <p className="experience-years">{item.years}</p>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <p className="experience-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-practice" aria-labelledby="practice-title">
        <div className="portfolio-section-heading">
          <p>Practice</p>
          <h2 id="practice-title">Architecture, reliability, and useful software.</h2>
        </div>
        <p className="practice-copy">
          My core stack is Java and Kotlin across AWS and Azure, with hands-on work in Kafka,
          MySQL, Aurora, Redis, gRPC, observability, and chaos engineering. I also build small iOS
          products to stay close to the craft of turning an idea into something people can use.
        </p>
      </section>

      <section className="portfolio-section portfolio-apps" id="apps" aria-labelledby="apps-title">
        <div className="portfolio-section-heading">
          <p>Independent iOS apps</p>
          <h2 id="apps-title">Three iOS apps, designed and built end to end.</h2>
        </div>
        <div className="app-link-list">
          {apps.map((app, index) => (
            <Link className={`portfolio-app-link ${app.tone}`} to={app.to} key={app.name}>
              <span className="app-index">0{index + 1}</span>
              <span className="app-link-copy">
                <strong>{app.name}</strong>
                <span>{app.detail}</span>
              </span>
              <span className="app-kind">{app.kind}</span>
              <span className="app-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="portfolio-footer">
        <p>Mayur Beldar · Vancouver, Canada</p>
        <div>
          <a href="https://github.com/mbeldar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:mayur.beldar16@gmail.com">Email</a>
        </div>
      </footer>
    </main>
  );
};

export default RootLanding;
