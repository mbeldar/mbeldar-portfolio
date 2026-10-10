import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pastel.css';
import './Nond.css';
import appImg from '../assets/app.png';

const APP_STORE_URL = 'https://apps.apple.com/us/app/nond-recipe-grocery-planner/id6757132886';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nond: Recipe & Grocery Planner',
  alternateName: 'Nond',
  operatingSystem: 'iOS 26.0 or later',
  applicationCategory: 'LifestyleApplication',
  applicationSubCategory: 'Meal planning and recipe organization',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'A private meal planner and recipe organizer for iPhone that turns weekly meal plans into a consolidated grocery list. No account or recurring subscription required.',
  url: 'https://mayurbeldar.com/nond',
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  isAccessibleForFree: true,
  featureList: [
    'Weekly meal planner',
    'Automatic grocery lists from planned recipes',
    'Recipe import and organization',
    'Pantry staples filtering',
    'On-device private storage',
  ],
  author: {
    '@type': 'Person',
    name: 'Mayur Beldar',
    url: 'https://mayurbeldar.com/',
  },
  sameAs: [APP_STORE_URL],
};

const faqs: { q: string; a: string }[] = [
  {
    q: 'Does Nond require an account?',
    a: 'No. Nond requires no account, sign-up, or cloud sync. Your saved recipes, meal plan, and grocery list stay on your device and remain available offline.',
  },
  {
    q: 'Is Nond free?',
    a: 'Nond is free to download, and its core recipe, meal-planning, and grocery-list tools do not require a subscription. Optional home-screen widgets are available as a one-time in-app purchase.',
  },
  {
    q: 'How does the grocery list work?',
    a: 'When you schedule meals in your planner, Nond automatically builds a grocery list from the ingredients. Items you have marked as pantry staples (salt, oil, flour, etc.) are automatically excluded so you only buy what you actually need.',
  },
  {
    q: 'Can I use Nond without an internet connection?',
    a: 'Your saved recipes, meal plan, and grocery list are stored locally and remain available on your iPhone. Importing a new recipe from the web or using online search requires a connection.',
  },
  {
    q: 'Is there a subscription for Nond?',
    a: 'No. Nond does not require a recurring subscription. The optional widget upgrade is a one-time in-app purchase.',
  },
  {
    q: 'Can Nond import recipes from the web?',
    a: 'Yes. You can import a recipe from the web, find one with search, or add your own recipe manually, then place it directly into your weekly meal plan.',
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
    const title = 'Nond: iPhone Meal Planner & Grocery List';
    const description =
      'Nond is a private iPhone meal planner and recipe organizer that builds one grocery list from your weekly plan. Free core tools, no account, no subscription.';
    const canonicalUrl = 'https://mayurbeldar.com/nond';

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
        <Link to="/" className="nond-home-link" aria-label="Back to Mayur Beldar portfolio">
          MB / Portfolio
        </Link>
        <div className="nond-hero-art" aria-hidden="true">
          <img src={appImg} alt="" />
        </div>
        <div className="nond-copy">
          <h1>Nond</h1>
          <p className="nond-kicker">Plan meals once. Shop once.</p>
          <p className="nond-subtitle">
            A private iPhone meal planner that turns your recipes into a grocery list — free,
            offline, and without an account.
          </p>
          <div className="nond-actions">
            <a
              className="nond-cta-btn"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Nond on the App Store"
            >
              Download free
            </a>
            <a className="nond-secondary-btn" href="#how-it-works">How it works</a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="nond-section" id="how-it-works" aria-labelledby="how-heading">
        <h2 id="how-heading">How It Works</h2>
        <ol className="nond-steps">
          <li><span><strong>Save your recipes</strong> — add any recipe with ingredients, cook time, and servings. No internet needed.</span></li>
          <li><span><strong>Plan your week</strong> — drag recipes onto up to two weeks of your meal calendar. Breakfast, lunch, and dinner slots included.</span></li>
          <li><span><strong>Generate your grocery list</strong> — Nond reads every ingredient from your planned meals and builds a consolidated shopping list instantly.</span></li>
          <li><span><strong>Mark your staples</strong> — flag pantry basics like olive oil or garlic once and they will be excluded from every future list automatically.</span></li>
          <li><span><strong>Shop and cook</strong> — check items off as you shop, then follow your plan through the week.</span></li>
        </ol>
      </section>

      {/* SEARCH INTENT */}
      <section className="nond-section nond-discovery" id="iphone-meal-planner" aria-labelledby="nond-discovery-heading">
        <p className="nond-section-label">Made for iPhone</p>
        <h2 id="nond-discovery-heading">A meal planner that connects recipes, your week, and one grocery list</h2>
        <p className="nond-section-intro">
          Nond is for people who want a simple weekly meal planner without creating an account
          or paying for another subscription. Plan breakfast, lunch, and dinner, then take one
          consolidated shopping list to the store.
        </p>
        <div className="nond-intent-grid">
          <article>
            <h3>Meal planner that makes a grocery list</h3>
            <p>Schedule recipes and Nond combines their ingredients and quantities into one list automatically.</p>
          </article>
          <article>
            <h3>Recipe organizer for iPhone</h3>
            <p>Import recipes from the web, find one with search, or add your own so your personal cookbook and weekly plan stay together.</p>
          </article>
          <article>
            <h3>Private meal planning without an account</h3>
            <p>Your saved recipes, plans, and grocery lists live on your device. There is no account to create and no recurring subscription.</p>
          </article>
        </div>
      </section>

      {/* FEATURES */}
      <section className="nond-section" id="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Features</h2>
        <ul className="nond-features">
          <li><strong>Free core meal planner for iPhone</strong> — plan recipes and groceries with no account or recurring subscription.</li>
          <li><strong>Grocery list from meal plan</strong> — ingredients are pulled automatically from every recipe on your calendar.</li>
          <li><strong>Recipe manager for iOS</strong> — save, edit, and organize your own recipes with cook time and serving size.</li>
          <li><strong>Pantry &amp; staples system</strong> — mark household staples so they are never added to your shopping list by mistake.</li>
          <li><strong>Meal prep app with no account</strong> — saved recipes, plans, and lists live on-device; Nond does not collect your data.</li>
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
        <p>No account. No recurring subscription. Just a calm, private meal planner that lives on your iPhone.</p>
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
