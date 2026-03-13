import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { StatRow, FlowSteps } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/how-to-plan-meals-for-the-week', title: 'How to plan meals for the week: a complete step-by-step guide' },
  { to: '/nond/blog/lazy-grocery-shopping', title: "The lazy person's guide to grocery shopping" },
  { to: '/nond/blog/stop-wasting-food', title: 'How to stop wasting food: a simple weekly meal planning routine' },
];

const NondBlogGroceryList: React.FC = () => {
  useEffect(() => {
    document.title = 'How to Build a Grocery List from Your Meal Plan Automatically | Nond';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content =
      'Stop building grocery lists from memory. Learn how to generate an accurate shopping list straight from your meal plan — and never forget an ingredient again.';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://mayurbeldar.com/nond/blog/grocery-list-from-meal-plan';
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>How to Build a Grocery List from Your Meal Plan Automatically</h1>
      <p className="blog-meta">Grocery list · Meal plan · Shopping tips</p>

      <p>
        Most people build their grocery lists from memory. They think about what they usually buy, add a few things they know they are low on, and head to the store. It feels quick. It is also why they come home missing two ingredients for Tuesday's recipe and with three things they already had.
      </p>
      <p>
        A grocery list derived from a meal plan is categorically more accurate. This guide explains the difference, why it matters, and how to do it — including how to automate the whole process.
      </p>

      <StatRow stats={[
        { value: '15 min', label: 'to build a list manually', sub: 'across 4–5 recipes' },
        { value: '<1 min', label: 'with a meal plan app', sub: 'consolidated & filtered' },
        { value: '2–3×', label: 'fewer forgotten items', sub: 'vs shopping from memory' },
      ]} />

      <h2>Why memory-based grocery lists fail</h2>
      <p>
        Memory-based shopping has two systematic failure modes that compound each other:
      </p>
      <ol>
        <li>
          <strong>You forget things you need.</strong> When you are not cooking from a specific plan, you do not know precisely which ingredients you need. You remember the big items but miss the specifics — the fresh ginger for Thursday's stir-fry, the exact variety of canned tomatoes the pasta recipe calls for.
        </li>
        <li>
          <strong>You buy things you already have.</strong> Without a pantry check and a specific ingredient list, you default to buying things you usually use. The result is a cabinet with four cans of coconut milk because you could never quite remember how many you had left.
        </li>
      </ol>
      <p>
        The fix for both problems is the same: derive the list from specific recipes rather than from recall.
      </p>

      <h2>The manual method: recipe-by-recipe ingredient extraction</h2>
      <p>
        If you are not using any tools, here is the process that works:
      </p>
      <ol>
        <li>Write out the four or five meals you are cooking this week.</li>
        <li>Open each recipe — actual recipe, not just the name — and list every ingredient it requires.</li>
        <li>Go through the combined list and consolidate duplicates. If Monday's recipe needs one onion and Thursday's recipe needs two onions, write "onions x3."</li>
        <li>Check your pantry and cross off anything you already have.</li>
        <li>Remove your pantry staples — things like olive oil, salt, and basic spices that you maintain in stock.</li>
        <li>What remains is your actual grocery list.</li>
      </ol>
      <p>
        This takes about ten to fifteen minutes if done manually across four or five recipes. It is tedious but it is accurate. And because it is accurate, you shop once for the week rather than making mid-week runs for forgotten items.
      </p>

      <h2>Why consolidation matters more than people realise</h2>
      <p>
        The consolidation step — combining the same ingredient across multiple recipes — is where the most value is created and where manual list-building is most error-prone.
      </p>
      <p>
        Suppose you cook three recipes this week, each of which needs garlic. If you add garlic to your list three times, you might buy three separate heads. If you consolidate at the list-building stage and write "garlic x6 cloves," you buy the right amount once.
      </p>
      <p>
        At scale — across five meals and thirty-plus unique ingredients — this consolidation is genuinely difficult to do in your head. It is exactly the kind of repetitive, rule-based work that software handles perfectly.
      </p>

      <h2>How the pantry staples system eliminates overbuy</h2>
      <p>
        Certain ingredients never need to appear on a generated grocery list because you maintain them constantly. Salt, cooking oil, black pepper, garlic powder, onion powder, flour, sugar — these are pantry staples. You buy them when you are low; you do not buy them every week because a recipe calls for them.
      </p>
      <p>
        A proper pantry staples system means flagging these items once, so they are automatically excluded from every grocery list you ever generate. In <Link to="/nond">Nond</Link>, you mark an ingredient as a staple once and it disappears from every future generated list. You only see the ingredients you actually need to buy.
      </p>

      <div className="blog-callout">
        The goal of a grocery list generated from a meal plan is not just accuracy — it is that you shop once for the whole week with no mid-week returns to the store. That only happens if the list is derived from the recipes, not from memory.
      </div>

      <h2>Automating the whole process</h2>
      <p>
        The manual method above works. But the reason people stop doing it is that it takes time. The combination of opening multiple recipes, manually listing ingredients, consolidating duplicates, and checking the pantry takes ten to fifteen minutes — which is long enough to feel like a chore and short enough to skip when you are busy.
      </p>
      <p>
        Nond automates every step after "decide what to cook":
      </p>

      <FlowSteps steps={[
        { icon: '📖', label: 'Add recipes to app' },
        { icon: '📅', label: 'Schedule meals' },
        { icon: '⚡', label: 'Auto-generate list' },
        { icon: '✓', label: 'Shop once' },
      ]} />

      <ol>
        <li>Your recipes are stored in the app with their full ingredient lists.</li>
        <li>You drag them onto the weekly meal calendar.</li>
        <li>The app reads every scheduled recipe, extracts every ingredient, consolidates duplicates, and removes your flagged staples — all automatically.</li>
        <li>You get a clean, accurate list ready to take to the store.</li>
      </ol>
      <p>
        The whole process, after your recipes are saved, takes under a minute. That is the threshold at which it stops feeling like work and starts feeling like the default.
      </p>

      <h2>What to do when you do not have a recipe</h2>
      <p>
        Some meals are not recipe-based — you might be cooking something improvisational, or using a dish you know by heart without a written recipe. In these cases, add the meal to your plan with a simple ingredient list written from scratch. You still get the benefits of consolidation and pantry filtering against your other planned meals.
      </p>
      <p>
        For advice on building the broader planning habit, see: <Link to="/nond/blog/how-to-plan-meals-for-the-week">how to plan meals for the week</Link>.
      </p>

      <h2>How to check off items as you shop</h2>
      <p>
        A generated grocery list is only as useful as it is accessible in the store. In Nond, the grocery list is an interactive checklist you work through as you shop — swipe to check off items, with completed items moving out of the way. The list is on your phone, offline, and works just as well in the middle of a supermarket with poor signal as it does at home.
      </p>

      <div className="blog-cta">
        <p>Nond generates your grocery list automatically from your meal plan — no manual work, no forgotten ingredients, no mid-week store runs. Free on iPhone, no account required.</p>
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

export default NondBlogGroceryList;
