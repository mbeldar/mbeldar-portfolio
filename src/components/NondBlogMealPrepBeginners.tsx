import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { FlowSteps, StatRow } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/how-to-plan-meals-for-the-week', title: 'How to plan meals for the week: a complete step-by-step guide' },
  { to: '/nond/blog/stop-wasting-food', title: 'How to stop wasting food: a simple weekly meal planning routine' },
  { to: '/nond/blog/grocery-list-from-meal-plan', title: 'How to build a grocery list from your meal plan automatically' },
];

const NondBlogMealPrepBeginners: React.FC = () => {
  useEffect(() => {
    document.title = 'Meal Prep for Beginners: The Only System That Actually Sticks | Nond';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'A beginner-friendly meal prep system focused on consistency over perfection. Learn how to start small, build the habit, and make meal prep actually work long-term.';
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>Meal Prep for Beginners: The Only System That Actually Sticks</h1>
      <p className="blog-meta">Meal prep · Beginners · Habit building</p>

      <p>
        Most meal prep advice is built for people who already have the habit. Batch cooking twelve meals on Sunday, portioning into identical containers, photographing it all for Instagram. It looks impressive, and it absolutely works — for the people who are already doing it.
      </p>
      <p>
        If you are new to meal prep, that approach is a reliable way to burn out in three weeks. This guide is different. It is built around the smallest version of meal prep that is worth doing, then adding to it gradually as it becomes habit.
      </p>

      <h2>Why most beginners quit</h2>
      <p>
        There are two failure modes for new meal preppers:
      </p>
      <ol>
        <li><strong>Starting too big.</strong> Four-hour Sunday prep sessions are exhausting. When the novelty wears off after two or three weeks, the habit collapses because the activation energy is too high.</li>
        <li><strong>Setting unrealistic expectations.</strong> You prep five meals, feel great, then eat out twice during the week anyway — and feel like you failed. A flexible system does not have failure states like that.</li>
      </ol>
      <p>
        The goal is not to prepare every meal in advance. The goal is to reduce the number of times per week that you have to make a meal decision from scratch, tired, at 6pm when you have nothing ready.
      </p>

      <h2>The beginner-level meal prep system</h2>
      <p>
        Start here. Not with the twelve-container Sunday marathon. With this:
      </p>

      <FlowSteps steps={[
        { icon: '📋', label: 'Pick 3–4 meals' },
        { icon: '🛒', label: 'Build grocery list' },
        { icon: '🥘', label: 'Prep one component' },
        { icon: '🍽️', label: 'Cook & eat' },
        { icon: '🔁', label: 'Repeat weekly' },
      ]} />

      <h2>Step 1: Plan what you are eating this week (not every meal)</h2>
      <p>
        Decide three to four dinners you are going to make this week. Write them down somewhere. That is your plan. The plan is what keeps you from standing in front of the fridge at 7pm deciding between ordering pizza and forcing yourself to make something with ingredients you are not sure you have.
      </p>
      <p>
        Use Nond or any other tool to do this — the point is that the decision is made before you are hungry and tired.
      </p>

      <h2>Step 2: Do one thing ahead, not everything</h2>
      <p>
        Pick one component of your week that is worth preparing in advance:
      </p>
      <ul>
        <li>A batch of cooked grains (rice, quinoa) that will work across multiple meals.</li>
        <li>Proteins pre-marinated or pre-cooked.</li>
        <li>Roasted vegetables that can go into several different dishes.</li>
        <li>A big pot of soup or stew that will cover two or three lunches.</li>
      </ul>
      <p>
        Just one. This takes 30–45 minutes maximum. It is not impressive. It is sustainable.
      </p>

      <h2>Step 3: Build your grocery list from the plan</h2>
      <p>
        Once you have your three to four dinners and your one ahead component, make your grocery list from those specific recipes. Not from memory. From the recipe ingredient lists.
      </p>
      <p>
        This eliminates the classic problem of getting home from the store and realising you do not have a key ingredient. The plan is only useful if the groceries match the plan.
      </p>

      <div className="blog-callout">
        The compound benefit of meal planning: once you have a plan and the matching groceries, every meal takes significantly less mental energy. You are not deciding what to cook, you are just executing a decision you already made.
      </div>

      <h2>Step 4: Add complexity slowly</h2>
      <p>
        After four weeks of the minimal system, you will notice it is working. You are eating better during the week with less stress. At that point, add one thing:
      </p>
      <ul>
        <li>Add a second batch-cooked component.</li>
        <li>Extend your plan to include lunches, not just dinners.</li>
        <li>Try one more complex recipe per week that you would not have attempted without a plan.</li>
      </ul>
      <p>
        Each month, the system can absorb one incremental upgrade. By month four or five, you will have something that looks like the "serious meal prep" system — but you will have built it in a way that is sustainable because you never asked too much of yourself at once.
      </p>

      <StatRow stats={[
        { value: '45 min', label: 'Week 1 prep time', sub: 'learning the flow' },
        { value: '20 min', label: 'Week 4 prep time', sub: 'as it clicks' },
        { value: '10 min', label: 'Week 12 prep time', sub: 'on autopilot' },
      ]} />

      <h2>What "sticking with it" actually looks like</h2>
      <p>
        Sticking with meal prep does not mean doing it perfectly every week. It means that in the weeks when you skip Sunday prep entirely, you still have a list of what you were going to cook, and you are not starting from zero. And in the weeks when you do prep, even a little, you feel the difference immediately.
      </p>
      <p>
        That is the system. Small, consistent, flexible. Not impressive, just functional — which is the only kind of system that lasts.
      </p>

      <h2>The tools you need (minimal list)</h2>
      <ul>
        <li>A way to record your recipes (Nond, a notes app, a notebook — whatever you will actually use).</li>
        <li>A grocery list that comes from your meal plan, not from memory.</li>
        <li>Two or three good containers for batch-cooked food.</li>
        <li>That is genuinely everything.</li>
      </ul>

      <div className="blog-cta">
        <p>Nond helps you build the planning habit: save your recipes, plan your week, and get a grocery list automatically. Free on iPhone, no account required.</p>
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

export default NondBlogMealPrepBeginners;
