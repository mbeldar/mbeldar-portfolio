import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { CompareTable } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/why-i-built-my-own', title: 'Why I stopped using popular meal planning apps and built my own' },
  { to: '/nond/blog/recipe-manager-ios', title: 'Recipe manager for iOS: why a dedicated app beats Apple Notes' },
  { to: '/nond/blog/how-to-plan-meals-for-the-week', title: 'How to plan meals for the week: a complete step-by-step guide' },
];

const NondBlogFreeMealPlanner: React.FC = () => {
  useEffect(() => {
    document.title = 'Free Meal Planner for iPhone: What to Look For (and What to Avoid) | Nond';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content =
      'Looking for a free meal planner for iPhone with no subscription? Learn what actually matters in a meal planning app — and what the free-tier tricks to watch out for.';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://mayurbeldar.com/nond/blog/free-meal-planner-iphone';
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>Free Meal Planner for iPhone: What to Look For (and What to Avoid)</h1>
      <p className="blog-meta">Free apps · iPhone · No subscription · Meal planning</p>

      <p>
        There are dozens of meal planning apps on the App Store. Most are technically "free to download." Many are not actually free to use — the features that matter are locked behind a subscription that typically runs between five and ten dollars a month.
      </p>
      <p>
        This guide covers what features actually matter in a meal planner, how to spot the subscription traps, and what a genuinely free option looks like.
      </p>

      <h2>What "free" usually means in meal planning apps</h2>
      <p>
        The standard model for meal planning apps is freemium: a free tier that lets you add a small number of recipes (typically three to ten), with everything else gated. You import a few recipes, start to see the value, and then hit the wall — you need to subscribe to add more.
      </p>
      <p>
        This is a legitimate business model, and some apps deliver enough value to be worth the subscription. But if you just want to plan four dinners a week and generate a shopping list, you do not need a $70/year service to do that.
      </p>
      <p>
        Watch for these patterns when evaluating a "free" meal planner:
      </p>
      <ul>
        <li><strong>Recipe limits on the free tier.</strong> If you can only save five recipes for free, you will hit the ceiling very quickly.</li>
        <li><strong>Grocery list locked behind a paywall.</strong> Some apps let you plan meals for free but require a subscription to generate the actual shopping list — which is the most useful feature.</li>
        <li><strong>Mandatory account creation.</strong> Creating an account is not inherently a problem, but it is often a precursor to upsell emails and subscription prompts.</li>
        <li><strong>Data held hostage.</strong> Some apps make it difficult to export your recipes if you decide to stop subscribing.</li>
      </ul>

      <h2>Features that actually matter in a meal planner</h2>
      <p>
        Beyond the free-versus-paid question, here is what to look for when evaluating any meal planning app:
      </p>

      <h2>Recipe storage with ingredients</h2>
      <p>
        The core function. A meal planner needs to store recipes with their ingredient lists — not just recipe names or links to external websites. If the app only stores links, it cannot generate a grocery list from the actual ingredients.
      </p>
      <p>
        Look for: cook time, servings, and a clear ingredient list. Optional but useful: the ability to scale servings.
      </p>

      <h2>A meal calendar, not just a list</h2>
      <p>
        Planning what you are cooking requires a calendar view: which meal on which day. A simple list of "meals I might cook" is not planning — it is a wishlist. The app needs to let you assign meals to specific dates.
      </p>

      <h2>Grocery list generated from the plan</h2>
      <p>
        This is the most time-saving feature in a meal planner. After you schedule meals for the week, the app should be able to read every recipe's ingredient list and produce a consolidated shopping list — combining duplicates across recipes automatically.
      </p>
      <p>
        If you have to build your grocery list manually even after scheduling your meals, the app has not solved the hardest part of the problem. Read more about how this works in practice: <Link to="/nond/blog/grocery-list-from-meal-plan">how to build a grocery list automatically from your meal plan</Link>.
      </p>

      <h2>Pantry awareness or staples management</h2>
      <p>
        A good meal planner knows that you do not need to buy olive oil every week. It should let you flag ingredients you always have on hand — pantry staples — so they are automatically excluded from generated shopping lists. This stops the overbuy problem that fills cupboards with duplicate spices.
      </p>

      <h2>Offline access</h2>
      <p>
        A meal planner that requires an internet connection to show you your recipes while you are standing in a kitchen is a meal planner that will fail you at exactly the wrong moment. Your data should be stored on-device and accessible offline.
      </p>

      <h2>What Nond offers</h2>
      <p>
        <Link to="/nond">Nond</Link> is a free iPhone meal planner built around these exact features: recipe storage with ingredients, a two-week meal calendar, automatic grocery list generation, and a staples system. It has no subscription, no account requirement, and works fully offline.
      </p>
      <p>
        It does not have nutrition tracking, barcode scanning, recipe suggestions from the internet, or social sharing. Those features are deliberately absent — the app is designed to do the core job well rather than to maximise the feature list. If you need detailed nutrition data, a different tool is probably better suited. If you want to plan meals, generate a shopping list, and keep your recipes in one place — Nond does that, for free, with no ongoing cost.
      </p>
      <p>
        For the background on why it was built this way, see: <Link to="/nond/blog/why-i-built-my-own">why I stopped using popular meal planning apps and built my own</Link>.
      </p>

      <CompareTable
        colA="Typical freemium"
        colB="Nond"
        rows={[
          { feature: 'Recipe limit (free tier)', a: '5–10 recipes', b: 'Unlimited' },
          { feature: 'Grocery list generation', a: false, b: true },
          { feature: 'Works fully offline', a: false, b: true },
          { feature: 'No account required', a: false, b: true },
          { feature: 'No subscription', a: false, b: true },
          { feature: 'Data stored on-device', a: false, b: true },
          { feature: 'Two-week meal calendar', a: 'Paid only', b: 'Included' },
          { feature: 'Export your recipes', a: 'Difficult', b: true },
        ]}
      />

      <div className="blog-callout">
        The right free meal planner is the simplest one that does what you actually need: recipe storage, a weekly calendar, and a grocery list that comes from the recipes. You do not need more than that to cook well.
      </div>

      <h2>How to evaluate any meal planner before committing</h2>
      <ol>
        <li>Add five real recipes you actually cook. Can you add all five on the free tier?</li>
        <li>Schedule them across a week. Is the calendar view clear and usable?</li>
        <li>Generate a grocery list. Does it consolidate ingredients automatically?</li>
        <li>Check if it works with airplane mode on. Is it truly offline?</li>
        <li>Try to delete your account and export your data. How hard is it to leave?</li>
      </ol>
      <p>
        An app that passes all five of these tests is genuinely useful. Most will fail at step three or four.
      </p>

      <div className="blog-cta">
        <p>Nond passes all five. Free download, no account, no subscription — a meal planner that does exactly what it says.</p>
        <a
          className="blog-cta-btn"
          href="https://apps.apple.com/us/app/nond-recipe-grocery-planner/id6757132886"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Nond Free on the App Store
        </a>
      </div>

      <nav className="blog-nav" aria-label="More meal planning guides">
        <p>More guides:</p>
        <ul>
          {OTHER_POSTS.map(({ to, title }) => (
            <li key={to}><Link to={to}>{title}</Link></li>
          ))}
        </ul>
      </nav>
    </article>
  );
};

export default NondBlogFreeMealPlanner;
