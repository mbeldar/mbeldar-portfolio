import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { StatRow } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/free-meal-planner-iphone', title: 'Free meal planner for iPhone: what to look for (and what to avoid)' },
  { to: '/nond/blog/recipe-manager-ios', title: 'Recipe manager for iOS: why a dedicated app beats Apple Notes' },
  { to: '/nond/blog/meal-prep-beginners', title: 'Meal prep for beginners: the only system that actually sticks' },
];

const NondBlogWhyIBuilt: React.FC = () => {
  useEffect(() => {
    document.title = 'Why I Stopped Using Popular Meal Planning Apps and Built My Own | Nond';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'A developer explains why every popular meal planning app fell short — and what he built instead: a private, offline iOS app with no account and no subscription.';
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>Why I Stopped Using Popular Meal Planning Apps and Built My Own</h1>
      <p className="blog-meta">Developer story · App comparison · Meal planning</p>

      <p>
        I have used a lot of meal planning apps. I have paid for subscriptions, imported recipes, filled out profile questions about dietary preferences, and watched carefully designed onboarding flows. And then, almost every time, I stopped using the app within a month.
      </p>
      <p>
        After going through this cycle a few too many times, I decided to figure out exactly why — and then build something that fixed the specific things that kept tripping me up.
      </p>

      <StatRow stats={[
        { value: '$70+', label: 'typical app subscription per year', sub: 'for features I barely use' },
        { value: '6', label: 'apps tried before building my own', sub: 'none stuck past a month' },
        { value: '7', label: 'requirements that shaped Nond', sub: 'from account-free to offline' },
      ]} />

      <h2>The account problem</h2>
      <p>
        Every major meal planning app starts with an account. You need to create a profile before you can even see what the app looks like. That is already friction at the worst possible moment — when you are deciding whether it is worth your time.
      </p>
      <p>
        Once you have an account, your recipes and meal plans live in someone else's cloud. If the company shuts down, changes its pricing, or gets acquired, you lose your data. This happened to Pepperplate (beloved recipe manager, shut down in 2021 with minimal notice). It will happen again.
      </p>
      <p>
        I wanted an app where my recipes were mine, stored locally, accessible offline, and not dependent on a company keeping its servers running.
      </p>

      <h2>The subscription problem</h2>
      <p>
        Almost every full-featured meal planner now charges a subscription — typically $5–$10 per month, or $40–$80 per year. That is a lot of money to spend on planning what to eat. The free tiers are usually limited to a small number of recipes or meals, just enough to frustrate you into paying.
      </p>
      <p>
        I am not opposed to paying for software. I use paid apps regularly. But the value exchange in meal planning subscriptions never quite made sense to me: pay monthly, forever, to maintain access to your own recipes.
      </p>

      <h2>The complexity problem</h2>
      <p>
        Popular meal planning apps compete on features. Nutrition tracking, calorie counting, macro-balanced weekly plans, integration with fitness trackers, suggested recipes based on dietary profiles. These are impressive capabilities, and some people genuinely need them.
      </p>
      <p>
        I do not need them. I need to pick what I am cooking this week and know what to buy at the store. Everything layered on top of that core function increases the cognitive load of using the app.
      </p>
      <p>
        When the UI is full of buttons and settings I am never going to touch, I find myself interacting with the app less, not more.
      </p>

      <h2>What I actually wanted</h2>
      <p>
        After thinking about the specific failures, I wrote down a short list:
      </p>
      <ul>
        <li>No account required. Open the app, start using it.</li>
        <li>Recipes stored on-device. No cloud dependency.</li>
        <li>A meal planner that maps to a real week, not an abstract template.</li>
        <li>Automatic grocery list generation from planned meals.</li>
        <li>A staples system so I stop buying duplicate pantry items.</li>
        <li>Clean, simple interface with nothing I do not need.</li>
        <li>Free, one-time download. No subscription.</li>
      </ul>
      <p>
        That list is basically the feature set of Nond. Not because I designed it to be comprehensive, but because I designed it to be exactly what I personally wanted and nothing more.
      </p>

      <h2>Building it</h2>
      <p>
        I am a software engineer by trade, so building an iOS app was a realistic side project rather than an impossible one. But having the technical skills to build something and actually shipping it to the App Store are meaningfully different challenges.
      </p>
      <p>
        The main engineering principle I kept coming back to was: keep the data model simple. Recipes have ingredients. Ingredients go on the meal plan. The meal plan drives the grocery list. Pantry staples filter that list. That is the whole data flow. Nothing else needed to exist.
      </p>
      <p>
        Every time I was tempted to add a feature — nutrition data, recipe scaling, shared meal plans — I asked whether it served the core loop. Almost always, the answer was no, and the feature did not ship.
      </p>

      <div className="blog-callout">
        The best version of a tool is the simplest one that solves your actual problem. Not the simplest possible tool — the simplest one that fully solves the specific problem.
      </div>

      <h2>The result</h2>
      <p>
        I have been using Nond as my own meal planner for months now. It has survived the test that every other app I tried failed: I still open it, every week, because using it is faster and less annoying than not using it.
      </p>
      <p>
        If your frustration with meal planning apps looks anything like mine — the accounts, the subscriptions, the feature bloat — Nond might be worth a try. It is free. It does not need your email address. It works offline.
      </p>

      <div className="blog-cta">
        <p>Nond: a meal planner for iPhone with no account, no subscription, and nothing you do not need.</p>
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

export default NondBlogWhyIBuilt;
