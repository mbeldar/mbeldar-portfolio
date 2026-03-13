import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import './Nond.css';

const faqs: { q: string; a: React.ReactNode; schema: string }[] = [
  {
    q: 'Does Nond require an account?',
    a: 'No. Nond works entirely without an account. There is no sign-up, no email address required, and no cloud sync. You open the app and start using it immediately.',
    schema: 'No. Nond works entirely without an account. There is no sign-up, no email address required, and no cloud sync. You open the app and start using it immediately.',
  },
  {
    q: 'Is Nond free to download?',
    a: 'Yes. Nond is free on the App Store with no purchase required to access any feature.',
    schema: 'Yes. Nond is free on the App Store with no purchase required to access any feature.',
  },
  {
    q: 'Is there a subscription for Nond?',
    a: 'No subscription. Nond is a free, one-time download with no recurring charges and no paywall. All features are available from the first tap.',
    schema: 'No subscription. Nond is a free, one-time download with no recurring charges and no paywall. All features are available from the first tap.',
  },
  {
    q: 'Does Nond work offline?',
    a: 'Yes. Nond is fully offline — your recipes, meal plan, and grocery list are stored locally on your iPhone. No internet connection is needed to use any part of the app.',
    schema: 'Yes. Nond is fully offline — your recipes, meal plan, and grocery list are stored locally on your iPhone. No internet connection is needed to use any part of the app.',
  },
  {
    q: 'How does the grocery list work?',
    a: (
      <>
        When you schedule meals on your planner, Nond reads the ingredient list of every recipe and builds a consolidated grocery list automatically — combining duplicates across meals and excluding any ingredients you have marked as pantry staples. See the full guide:{' '}
        <Link to="/nond/blog/grocery-list-from-meal-plan">how to build a grocery list from your meal plan</Link>.
      </>
    ),
    schema: 'When you schedule meals on your planner, Nond reads the ingredient list of every recipe and builds a consolidated grocery list automatically — combining duplicates across meals and excluding ingredients you have marked as pantry staples.',
  },
  {
    q: 'What are pantry staples?',
    a: 'Pantry staples are ingredients you always keep in stock — things like olive oil, salt, garlic, flour, and basic spices. You mark them once in Nond, and they are automatically excluded from every grocery list you generate. This prevents buying duplicates of things you already have.',
    schema: 'Pantry staples are ingredients you always keep in stock — things like olive oil, salt, garlic, flour, and basic spices. You mark them once in Nond, and they are automatically excluded from every grocery list you generate.',
  },
  {
    q: 'How do I add a recipe?',
    a: 'Tap the recipes tab, create a new recipe, and add a title, cook time, servings, and your ingredient list. Each ingredient is a separate entry so the app can use it for grocery list generation and pantry filtering.',
    schema: 'Tap the recipes tab, create a new recipe, and add a title, cook time, servings, and your ingredient list. Each ingredient is a separate entry so the app can use it for grocery list generation and pantry filtering.',
  },
  {
    q: 'How do I plan meals for the week?',
    a: (
      <>
        Open the meal planner, navigate to the week you want to plan, and tap any day slot to assign a recipe. Nond supports up to two weeks of planning. Once meals are scheduled, tap "Generate grocery list" to build your shopping list automatically. For the full planning process, see:{' '}
        <Link to="/nond/blog/how-to-plan-meals-for-the-week">how to plan meals for the week</Link>.
      </>
    ),
    schema: 'Open the meal planner, navigate to the week you want to plan, and tap any day slot to assign a recipe. Nond supports up to two weeks of planning. Once meals are scheduled, generate your grocery list automatically.',
  },
  {
    q: 'Is Nond available on Android?',
    a: 'Not currently. Nond is an iOS app available on iPhone and iPad. There are no plans for an Android version at this time.',
    schema: 'Not currently. Nond is an iOS app available on iPhone and iPad. There are no plans for an Android version at this time.',
  },
  {
    q: 'Is Nond available on iPad?',
    a: 'Yes. Nond runs on iPad as well as iPhone. It is a universal iOS app available on any device running iOS.',
    schema: 'Yes. Nond runs on iPad as well as iPhone. It is a universal iOS app available on any device running iOS.',
  },
  {
    q: 'Can I sync Nond across multiple devices?',
    a: 'Nond stores data locally on-device and does not sync across devices. This is by design — your data stays private, on your phone, and is not dependent on any external server or account.',
    schema: 'Nond stores data locally on-device and does not sync across devices. This is by design — your data stays private, on your phone, and is not dependent on any external server or account.',
  },
  {
    q: 'How do I back up my recipes?',
    a: 'Your recipes are stored in your iPhone local storage. They are included in your iCloud device backup if you have iCloud Backup enabled in iOS Settings. Restoring from an iCloud backup to a new device will restore your Nond data.',
    schema: 'Your recipes are stored in your iPhone local storage and are included in your iCloud device backup if iCloud Backup is enabled. Restoring from an iCloud backup to a new device will restore your Nond data.',
  },
  {
    q: 'Can I share my meal plan with someone else?',
    a: 'Nond does not currently have a built-in sharing feature. The grocery list can be shared using your iPhone\'s standard share sheet, which lets you send it via Messages, email, or any messaging app.',
    schema: "Nond does not currently have a built-in sharing feature. The grocery list can be shared using your iPhone's standard share sheet to send it via Messages, email, or any messaging app.",
  },
  {
    q: 'Can I import recipes from websites?',
    a: 'Nond does not automatically import recipes from URLs. Recipes are added manually, which keeps the app simple and ensures you only save meals you actually intend to cook.',
    schema: 'Nond does not automatically import recipes from URLs. Recipes are added manually, which keeps the app simple and ensures you only save meals you actually intend to cook.',
  },
  {
    q: 'Is my data private?',
    a: 'Yes. Nond never sends your recipes, meal plans, or grocery lists to any server. Everything is stored locally on your device. There is no account, no analytics tied to your food data, and no third-party data sharing.',
    schema: 'Yes. Nond never sends your recipes, meal plans, or grocery lists to any server. Everything is stored locally on your device with no account and no data sharing.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, schema }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: schema },
  })),
};

const NondFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Nond FAQ — Frequently Asked Questions | Nond Meal Planner';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content =
      'Answers to common questions about Nond: does it require an account, is it free, how does the grocery list work, is it available on Android, and more.';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://mayurbeldar.com/nond/faq';
  }, []);

  return (
    <div className="blog-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>Nond — Frequently Asked Questions</h1>
      <p className="blog-meta">Everything you need to know before downloading</p>

      <dl className="nond-faq" style={{ marginTop: '32px' }}>
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
            {openFaq === i && (
              <dd className="nond-faq-a">{a}</dd>
            )}
          </div>
        ))}
      </dl>

      <nav className="blog-nav" style={{ marginTop: '48px' }} aria-label="Meal planning guides">
        <p>Helpful guides from the Nond blog:</p>
        <ul>
          <li><Link to="/nond/blog/how-to-plan-meals-for-the-week">How to plan meals for the week: a complete step-by-step guide</Link></li>
          <li><Link to="/nond/blog/grocery-list-from-meal-plan">How to build a grocery list from your meal plan automatically</Link></li>
          <li><Link to="/nond/blog/free-meal-planner-iphone">Free meal planner for iPhone: what to look for (and what to avoid)</Link></li>
          <li><Link to="/nond/blog/stop-wasting-food">How to stop wasting food: a simple weekly meal planning routine</Link></li>
          <li><Link to="/nond/blog/meal-prep-beginners">Meal prep for beginners: the only system that actually sticks</Link></li>
          <li><Link to="/nond/blog/recipe-manager-ios">Recipe manager for iOS: why a dedicated app beats Apple Notes</Link></li>
          <li><Link to="/nond/blog/lazy-grocery-shopping">The lazy person's guide to grocery shopping</Link></li>
          <li><Link to="/nond/blog/why-i-built-my-own">Why I stopped using popular meal planning apps and built my own</Link></li>
        </ul>
      </nav>

      <div className="blog-cta">
        <p>Ready to try it? Nond is free on the App Store — no account, no subscription.</p>
        <a
          className="blog-cta-btn"
          href="https://apps.apple.com/us/app/nond-recipe-grocery-planner/id6757132886"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Nond Free
        </a>
      </div>
    </div>
  );
};

export default NondFaq;
