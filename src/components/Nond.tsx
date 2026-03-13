import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pastel.css';
import './Nond.css';
import appImg from '../assets/app.png';
import appBadge from '../assets/available-on-the-app-store.svg';

const APP_STORE_URL = 'https://apps.apple.com/us/app/nond-recipe-grocery-planner/id6757132886';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nond — Recipe & Grocery Planner',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '5',
  },
  description:
    'Meal planner for iPhone with no account and no subscription. Plan meals, build grocery lists from recipes, and manage your pantry — all offline and private.',
  url: 'https://mayurbeldar.com/nond',
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'Does Nond require an account?',
    a: 'No. Nond works completely offline with no account, no sign-up, and no cloud sync required. Your data stays on your device.',
  },
  {
    q: 'Is Nond free?',
    a: 'Yes, Nond is free to download on the App Store with no subscription and no hidden fees.',
  },
  {
    q: 'How does the grocery list work?',
    a: 'When you schedule meals in your planner, Nond automatically builds a grocery list from the ingredients. Items you have marked as pantry staples (salt, oil, flour, etc.) are automatically excluded so you only buy what you actually need.',
  },
  {
    q: 'Can I use Nond without an internet connection?',
    a: 'Yes. Nond is fully offline — your recipes, meal plan, and grocery list are stored locally on your iPhone.',
  },
  {
    q: 'Is there a subscription for Nond?',
    a: 'No subscription. Nond is a one-time free download with no recurring charges.',
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

const Nond: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Nond — Meal Planner for iPhone, No Account, No Subscription';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content =
      'Nond is a free iPhone meal planner with no account and no subscription. Plan meals, generate grocery lists from recipes, and manage your pantry — 100% offline.';
  }, []);

  return (
    <div className="nond-root">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="nond-hero" aria-label="Hero">
        <div className="nond-copy">
          <h1>Meal Planner for iPhone — No Account, No Subscription</h1>
          <p className="nond-subtitle">
            Nond is a free iOS app that combines a digital cookbook, a two-week meal planner, and a
            smart grocery list that knows your pantry. Plan meals for the week, auto-generate your
            shopping list, and cook without the stress — all offline, no sign-up required.
          </p>
          <a
            className="nond-cta-btn"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Nond on the App Store"
          >
            Free Download — App Store
          </a>
        </div>

        <div className="nond-image">
          <img src={appImg} alt="Nond meal planner app running on an iPhone" />
          <div className="nond-store">
            <a
              className="nond-store-link"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Nond on the App Store (opens in a new tab)"
            >
              <img src={appBadge} alt="Available on the App Store" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="nond-section" id="how-it-works" aria-labelledby="how-heading">
        <h2 id="how-heading">How It Works</h2>
        <ol className="nond-steps">
          <li><strong>Save your recipes</strong> — add any recipe with ingredients, cook time, and servings. No internet needed.</li>
          <li><strong>Plan your week</strong> — drag recipes onto up to two weeks of your meal calendar. Breakfast, lunch, and dinner slots included.</li>
          <li><strong>Generate your grocery list</strong> — Nond reads every ingredient from your planned meals and builds a consolidated shopping list instantly.</li>
          <li><strong>Mark your staples</strong> — flag pantry basics like olive oil or garlic once and they will be excluded from every future list automatically.</li>
          <li><strong>Shop and cook</strong> — check items off as you shop, then follow your plan through the week.</li>
        </ol>
      </section>

      {/* FEATURES */}
      <section className="nond-section" id="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <ul className="nond-features">
          <li><strong>Free meal planner for iPhone</strong> — no subscription, no paywall, no account required.</li>
          <li><strong>Grocery list from meal plan</strong> — ingredients are pulled automatically from every recipe on your calendar.</li>
          <li><strong>Recipe manager for iOS</strong> — save, edit, and organize your own recipes with cook time and serving size.</li>
          <li><strong>Pantry &amp; staples system</strong> — mark household staples so they are never added to your shopping list by mistake.</li>
          <li><strong>Meal prep app with no account</strong> — everything lives on-device; your data is never sent to a server.</li>
          <li><strong>Dark Mode &amp; Light Mode</strong> — polished themes for any lighting condition.</li>
          <li><strong>Swipe gestures</strong> — check off groceries, mark staples, or reorder your list with intuitive swipes.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="nond-section" id="faq" aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>
        <dl className="nond-faq">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="nond-faq-item">
              <dt>
                <button
                  className="nond-faq-q"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {q}
                  <span className="nond-faq-icon" aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                </button>
              </dt>
              {openFaq === i && <dd className="nond-faq-a">{a}</dd>}
            </div>
          ))}
        </dl>
      </section>

      {/* GUIDES */}
      <section className="nond-section" id="guides" aria-labelledby="guides-heading">
        <h2 id="guides-heading">Meal Planning Guides</h2>
        <p className="nond-guides-intro">
          Practical, no-fluff guides to help you plan meals, cut food waste, and simplify grocery shopping.
        </p>
        <ul className="nond-blog-links">
          <li><Link to="/nond/blog/how-to-plan-meals-for-the-week">How to plan meals for the week: a complete step-by-step guide</Link></li>
          <li><Link to="/nond/blog/stop-wasting-food">How to stop wasting food: a simple weekly meal planning routine</Link></li>
          <li><Link to="/nond/blog/meal-prep-beginners">Meal prep for beginners: the only system that actually sticks</Link></li>
          <li><Link to="/nond/blog/grocery-list-from-meal-plan">How to build a grocery list from your meal plan automatically</Link></li>
          <li><Link to="/nond/blog/lazy-grocery-shopping">The lazy person's guide to grocery shopping</Link></li>
          <li><Link to="/nond/blog/free-meal-planner-iphone">Free meal planner for iPhone: what to look for (and what to avoid)</Link></li>
          <li><Link to="/nond/blog/recipe-manager-ios">Recipe manager for iOS: why a dedicated app beats Apple Notes</Link></li>
          <li><Link to="/nond/blog/why-i-built-my-own">Why I stopped using popular meal planning apps and built my own</Link></li>
        </ul>
        <p style={{marginTop: '16px'}}><Link to="/nond/faq" style={{color: '#c4b5fd', textDecoration: 'underline'}}>Have questions? Read the full FAQ →</Link></p>
      </section>

      {/* DOWNLOAD */}
      <section className="nond-section nond-download" id="download" aria-labelledby="dl-heading">
        <h2 id="dl-heading">Download Nond — Free on the App Store</h2>
        <p>No account. No subscription. Just a calm, private meal planner that lives on your iPhone.</p>
        <a
          className="nond-cta-btn"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Nond free on the App Store"
        >
          Get Nond for Free
        </a>
        <p className="nond-legal-link">
          <Link to="/nond/legal">Legal &amp; Disclaimer</Link>
          {' · '}
          <Link to="/nond/support">Support</Link>
        </p>
      </section>
    </div>
  );
};

export default Nond;
