import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { StatRow, WeekGrid } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/stop-wasting-food', title: 'How to stop wasting food: a simple weekly meal planning routine' },
  { to: '/nond/blog/meal-prep-beginners', title: 'Meal prep for beginners: the only system that actually sticks' },
  { to: '/nond/blog/grocery-list-from-meal-plan', title: 'How to build a grocery list from your meal plan automatically' },
];

const NondBlogHowToPlanMeals: React.FC = () => {
  useEffect(() => {
    document.title = 'How to Plan Meals for the Week: A Complete Step-by-Step Guide | Nond';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content =
      'Learn exactly how to plan meals for the week in 5 minutes — pick dinners, build your grocery list, and stop the daily "what should I cook?" decision fatigue for good.';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://mayurbeldar.com/nond/blog/how-to-plan-meals-for-the-week';
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>How to Plan Meals for the Week: A Complete Step-by-Step Guide</h1>
      <p className="blog-meta">Weekly meal planning · Beginners · Step-by-step</p>

      <p>
        If you have ever stood in front of the fridge at 6:30pm, exhausted, with no idea what to cook — you already understand why meal planning matters. The problem is not willpower or motivation. It is the absence of a plan made at the right moment, before you are tired and hungry.
      </p>
      <p>
        This guide walks through exactly how to plan meals for the week: what to decide, in what order, and how to do it in about five minutes so it actually becomes a sustainable habit.
      </p>

      <StatRow stats={[
        { value: '4–5', label: 'meals to plan per week', sub: 'leave 2 nights flexible' },
        { value: '10 min', label: 'total planning time', sub: 'once it is a habit' },
        { value: '1×', label: 'weekly grocery trip', sub: 'no mid-week runs' },
      ]} />

      <h2>What meal planning is actually for</h2>
      <p>
        Before the steps, it is worth being clear about the goal. Meal planning is not about achieving dietary perfection or cooking elaborate recipes every night. It is about making the decision of what to eat before you are in the worst possible state to make decisions — tired, hungry, and standing in an empty kitchen.
      </p>
      <p>
        A good meal plan reduces three specific costs: the time you spend deciding what to cook, the money you waste on food that never gets used, and the mental energy that evaporates when every evening starts with that question.
      </p>

      <h2>Step 1: Pick 4–5 dinners, not 7</h2>
      <p>
        The most common beginner mistake is planning every single meal for every single day. It sounds thorough, but it creates a rigid structure that life will immediately break — and once it breaks, the whole plan feels like a failure.
      </p>
      <p>
        Instead, plan four or five dinners. Leave two nights intentionally unplanned: one for leftovers (you will have them) and one for flexibility (takeout, a late meeting, a friend's dinner). This builds resilience into the system from the start.
      </p>
      <p>
        For lunches, either plan them separately or plan to eat dinner leftovers. Most people underestimate how much friction they save by making the leftover lunch the default.
      </p>

      <h2>Step 2: Check what you have before deciding what to buy</h2>
      <p>
        Spend 60 seconds looking at your fridge and pantry before you pick your meals. Two things will happen: you will find ingredients that are about to expire (build a meal around them), and you will remember what you already have in stock (avoid buying duplicates).
      </p>
      <p>
        This single step eliminates a significant amount of food waste. The produce that dies in the back of the crisper drawer almost always dies because a plan was made before checking what was already there.
      </p>

      <h2>Step 3: Build your grocery list from the recipes, not from memory</h2>
      <p>
        Once you have chosen your meals, list every ingredient each recipe requires. Not from memory — from the actual recipe. Memory is unreliable and optimistic. Recipe ingredient lists are not.
      </p>
      <p>
        This step is where most people still go wrong even when they are technically "meal planning." They decide what to cook but then build their shopping list from what they remember needing rather than what they actually need. The result is forgotten ingredients and last-minute grocery runs.
      </p>
      <p>
        Apps like <Link to="/nond">Nond</Link> automate this step: add your recipes once, schedule them on the planner, and the app generates a consolidated ingredient list automatically — combining duplicates across meals so you only see "onions x3" rather than three separate onion entries.
      </p>

      <h2>Step 4: Remove anything you already have</h2>
      <p>
        Cross off any ingredient from your list that you already confirmed you have during the pantry check in Step 2. This sounds obvious but it is the step that most people skip, leading to cabinets full of duplicate olive oil, cumin, and canned tomatoes.
      </p>
      <p>
        The concept of "staples" formalises this. Pantry staples — cooking oil, salt, basic spices, flour — are things you maintain in stock and never need to buy for a specific recipe. Mark them once and exclude them from every future list. Nond does this automatically: flag an ingredient as a staple once and it never appears on a generated shopping list again.
      </p>

      <h2>Step 5: Write the final list and shop once</h2>
      <p>
        You now have a clean, accurate list that comes from your meal plan and reflects what you actually need. Shop once for the week. The plan only works if your kitchen has the matching ingredients.
      </p>
      <p>
        Organise the list loosely by section (produce, dairy, meat, dry goods) if you want to move through the store efficiently — but even an unorganised list built from a real meal plan is dramatically better than shopping from memory.
      </p>

      <h2>A concrete example of a planned week</h2>
      <p>
        Here is what a complete weekly meal plan looks like in practice, for a household of two:
      </p>
      <WeekGrid days={[
        { day: 'Mon', meal: 'Chicken stir-fry', type: 'planned' },
        { day: 'Tue', meal: 'Pasta & sausage', type: 'planned' },
        { day: 'Wed', meal: 'Leftovers', type: 'leftovers' },
        { day: 'Thu', meal: 'Sheet-pan salmon', type: 'planned' },
        { day: 'Fri', meal: 'Flexible / out', type: 'flex' },
        { day: 'Sat', meal: 'Slow-cooker chilli', type: 'planned' },
        { day: 'Sun', meal: 'Chilli leftovers', type: 'leftovers' },
      ]} />
      <p>
        That is four distinct dinners, two leftover nights, and one flexible night. The grocery list for this week is entirely derivable from the four recipes. Nothing relies on memory or habit.
      </p>

      <h2>How to handle a week where the plan breaks down</h2>
      <p>
        Plans break. The trick is building the habit so that even a partial plan is better than no plan. If you only get through three of your five planned meals, that is still three nights of not having to decide what to eat. The plan does not need to be perfect to be valuable.
      </p>
      <p>
        When something gets skipped, move it to the next week rather than abandoning it. Over time you build a rotation of ten to fifteen reliable meals that you cook repeatedly — and once the recipes are saved, rebuilding the grocery list for any of them takes seconds rather than minutes.
      </p>

      <h2>The tool that makes this sustainable</h2>
      <p>
        The friction in meal planning is almost entirely in Step 3 — building the grocery list. Doing it manually from multiple recipes is tedious enough that people skip it and revert to memory shopping.
      </p>
      <p>
        <Link to="/nond">Nond</Link> removes that friction. Your recipes live in the app, you schedule them on the calendar, and the grocery list is generated in one tap. It works offline, requires no account, and costs nothing. The planning habit becomes sustainable when the mechanics are fast enough to not feel like work.
      </p>

      <div className="blog-callout">
        The minimum viable meal planning habit: pick 4 dinners on Sunday, build the list from the recipes, shop once. That is the entire system.
      </div>

      <h2>When you have the habit, add one thing at a time</h2>
      <p>
        Once Sunday planning takes less than ten minutes and feels automatic, you can start adding: planning lunches, prepping one component in advance (batch-cooked grains, a marinated protein), or experimenting with a new recipe each week. But none of that is necessary to start. The four-dinner plan, built from actual recipes, is the foundation everything else rests on.
      </p>

      <div className="blog-cta">
        <p>Nond makes weekly meal planning effortless — save your recipes, schedule your week, and get your grocery list automatically. Free on iPhone, no account required.</p>
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

export default NondBlogHowToPlanMeals;
