import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { StatRow, HBarChart } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/grocery-list-from-meal-plan', title: 'How to build a grocery list from your meal plan automatically' },
  { to: '/nond/blog/how-to-plan-meals-for-the-week', title: 'How to plan meals for the week: a complete step-by-step guide' },
  { to: '/nond/blog/stop-wasting-food', title: 'How to stop wasting food: a simple weekly meal planning routine' },
];

const NondBlogLazyGrocery: React.FC = () => {
  useEffect(() => {
    document.title = "The Lazy Person's Guide to Grocery Shopping | Nond";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = "Grocery shopping tips that save time and money without requiring motivation. A practical system for people who hate doing it.";
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>The Lazy Person's Guide to Grocery Shopping</h1>
      <p className="blog-meta">Grocery tips · Easier shopping · Save time</p>

      <p>
        Grocery shopping is one of those chores that feels like it should be easy but somehow manages to be annoying every single time. You forget something. You buy too much. You end up with three bags of spinach because apparently you thought you were out of spinach.
      </p>
      <p>
        This guide is for people who do not enjoy grocery shopping and want to make it as painless and infrequent as possible.
      </p>

      <StatRow stats={[
        { value: '62%', label: 'list accuracy from memory', sub: 'leads to mid-week trips' },
        { value: '95%', label: 'accuracy from a meal plan', sub: 'one trip, nothing missing' },
        { value: '−2', label: 'fewer store visits weekly', sub: 'by planning ahead' },
      ]} />

      <h2>The core principle: shop less, not more efficiently</h2>
      <p>
        Most grocery advice focuses on how to shop better — organize your list by aisle, use coupons, comparison shop. All fine, but it misses the bigger lever: shopping less often is more valuable than shopping more efficiently.
      </p>
      <p>
        If you can go from three grocery trips a week to one, you have eliminated two-thirds of the friction, the impulse buys, and the time cost. The trick is buying the right things once.
      </p>

      <h2>Build a list from your actual meals, not from memory</h2>
      <p>
        The reason you forget things and overbuy is that you are trying to remember what you need from an imaginary future week of eating. Nobody is good at that.
      </p>
      <p>
        The fix is to decide what you are cooking before you write the list — not the other way around. Pick four or five meals, then list the ingredients you need for those meals specifically. This is mechanical and accurate rather than intuitive and unreliable.
      </p>
      <p>
        Nond does this automatically: add your recipes, schedule them on your meal planner, and the app generates your grocery list from the ingredients. You just review it and go.
      </p>

      <HBarChart
        title="Weekly grocery time: by shopping method (relative)"
        bars={[
          { label: 'No plan', pct: 90, note: 'most time', color: 'rgba(255,255,255,0.22)' },
          { label: 'Mental list', pct: 65, note: 'less time', color: 'rgba(168,85,247,0.4)' },
          { label: 'Plan + auto-list', pct: 25, note: 'least time', color: '#a855f7' },
        ]}
      />

      <h2>Never buy pantry staples from memory again</h2>
      <p>
        The classic overbuy problem: you already have olive oil, cumin, and soy sauce, but you are not sure, so you buy them again. Multiply this by every staple ingredient and you get a lot of wasted money and a very cluttered pantry.
      </p>
      <p>
        The solution is to maintain a list of what you always have on hand and exclude those items from your shopping list automatically. In Nond, you flag something as a "staple" once, and it will never appear on a generated grocery list again — because the app assumes you have it.
      </p>

      <h2>The lazy shopping list system</h2>
      <ol>
        <li><strong>Step 1:</strong> Plan 4–5 meals for the week (5 minutes).</li>
        <li><strong>Step 2:</strong> Generate your ingredient list from those meals.</li>
        <li><strong>Step 3:</strong> Remove anything you already have that is not a staple.</li>
        <li><strong>Step 4:</strong> Add your weekly essentials (milk, eggs, bread, whatever you always need).</li>
        <li><strong>Step 5:</strong> Shop once. That is it for the week.</li>
      </ol>

      <div className="blog-callout">
        A list generated from a meal plan has about a 90% accuracy rate. A list generated from memory has about a 60% accuracy rate. That gap is where your forgotten items and overbought items live.
      </div>

      <h2>Practical grocery tips that actually work</h2>
      <ul>
        <li><strong>Shop after eating, not before.</strong> Hungry shopping is expensive shopping.</li>
        <li><strong>Organise your list loosely by section</strong> (produce, dairy, meat, dry goods) so you move through the store once instead of back and forth.</li>
        <li><strong>Do a quick fridge check before you leave.</strong> Takes 30 seconds and eliminates the "I already had three of those" problem.</li>
        <li><strong>Buy frozen vegetables as a backup.</strong> Fresh produce is great but it spoils. Frozen spinach, peas, and corn last indefinitely and are just as nutritious.</li>
        <li><strong>Double batch one meal per week.</strong> Cook twice as much of one recipe and you get a free work-from-home lunch for two days.</li>
      </ul>

      <h2>The only grocery habit worth keeping</h2>
      <p>
        Build your list from your meal plan, flag your staples once, and shop once a week. That is the whole system. Everything else is a detail.
      </p>

      <div className="blog-cta">
        <p>Nond builds your grocery list automatically from your meal plan and skips your staples. Free on iPhone, no account required.</p>
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

export default NondBlogLazyGrocery;
