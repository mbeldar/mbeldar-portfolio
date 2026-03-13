import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NondBlog.css';
import { CompareTable } from './BlogVisuals';

const OTHER_POSTS = [
  { to: '/nond/blog/free-meal-planner-iphone', title: 'Free meal planner for iPhone: what to look for (and what to avoid)' },
  { to: '/nond/blog/why-i-built-my-own', title: 'Why I stopped using popular meal planning apps and built my own' },
  { to: '/nond/blog/how-to-plan-meals-for-the-week', title: 'How to plan meals for the week: a complete step-by-step guide' },
];

const NondBlogRecipeManager: React.FC = () => {
  useEffect(() => {
    document.title = 'Recipe Manager for iOS: Why a Dedicated App Beats Apple Notes | Nond';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content =
      'Why Apple Notes and browser bookmarks are poor recipe managers — and what a real iOS recipe manager app should do to actually help you cook more and stress less.';
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://mayurbeldar.com/nond/blog/recipe-manager-ios';
  }, []);

  return (
    <article className="blog-root">
      <Link to="/nond" className="blog-back">← Back to Nond</Link>

      <h1>Recipe Manager for iOS: Why a Dedicated App Beats Apple Notes</h1>
      <p className="blog-meta">Recipe management · iOS · iPhone apps</p>

      <p>
        Most people keep their recipes in one of three places: bookmarks to websites that may go offline, screenshots in their camera roll, or a chaotic Notes document. All three work, after a fashion. None of them are good recipe managers.
      </p>
      <p>
        This is about what a dedicated recipe manager for iPhone actually provides — and why the difference matters more than it initially seems, especially once you start meal planning.
      </p>

      <h2>The problem with browser bookmarks</h2>
      <p>
        Bookmarking a recipe page feels efficient. You save the URL, and theoretically you can come back to it whenever you need it. In practice, three things go wrong:
      </p>
      <ul>
        <li><strong>The page changes or disappears.</strong> Recipe websites regularly update, restructure, or shut down. A bookmark to a page that no longer exists is worthless.</li>
        <li><strong>The page requires an internet connection.</strong> You are in the kitchen, ready to cook, and your phone has one bar of signal. Or you are abroad and do not want to use data. Bookmarks fail silently in both cases.</li>
        <li><strong>You cannot extract ingredient data from a URL.</strong> A bookmark is just a pointer. It cannot tell a meal planner what you need to buy. The link between your recipes and your grocery list remains manual.</li>
      </ul>

      <h2>The problem with screenshots</h2>
      <p>
        Screenshots solve the offline problem — the image is on your device. But they create new ones:
      </p>
      <ul>
        <li>They are unsearchable. Finding the photo of that chicken recipe among five thousand camera roll images requires scrolling or luck.</li>
        <li>They are not structured data. A screenshot of an ingredient list cannot be read by any app. It is just pixels.</li>
        <li>They degrade. Photos of handwritten index cards, screenshots of poorly lit printed recipes — the image quality is never consistent.</li>
      </ul>

      <h2>The problem with Notes</h2>
      <p>
        Apple Notes is fine for quick capture. It is poor as a recipe manager because it has no structure. There is no "servings" field, no "cook time" field, no ingredient list as data — just a block of text that you have to parse manually every time you cook.
      </p>
      <p>
        More importantly: text in Apple Notes cannot connect to anything else. Your recipe notes do not know about your meal plan. Your meal plan cannot generate a shopping list from your Notes. Everything remains manual.
      </p>

      <h2>What a dedicated recipe manager does differently</h2>
      <p>
        A purpose-built iOS recipe manager stores recipes as structured data: a title, a cook time, a serving count, and a proper ingredient list where each item is a discrete entry. That structure enables things that an unstructured note never can:
      </p>

      <h2>Search that works</h2>
      <p>
        When your recipes are structured, you can search by ingredient — "what can I make with chicken thighs and sweet potato?" — rather than scrolling through a flat list. Cook time filtering, cuisine tags, and recently-cooked sorting become possible.
      </p>

      <h2>Serving size scaling</h2>
      <p>
        A structured ingredient list means the app can scale servings. Double the recipe for guests, halve it for a solo night — the ingredient quantities adjust automatically. This is impossible with a Notes block or screenshot.
      </p>

      <h2>Integration with meal planning</h2>
      <p>
        This is the most valuable capability. When your recipes are stored with structured ingredient data, they can be scheduled on a meal plan, and the meal plan can drive a grocery list automatically.
      </p>
      <p>
        The connection between recipe → meal plan → grocery list is where dedicated apps create disproportionate value. All the friction of planning what to cook and then translating that plan into what to buy collapses into a single workflow. Read more: <Link to="/nond/blog/grocery-list-from-meal-plan">how to build a grocery list from your meal plan automatically</Link>.
      </p>

      <h2>True offline access</h2>
      <p>
        Your recipes are stored on-device. No internet required in the kitchen, on holiday, or anywhere else. This sounds like a small thing until you actually need it.
      </p>

      <h2>What to look for in an iOS recipe manager</h2>
      <p>
        Before committing to any app, check these:
      </p>
      <ol>
        <li><strong>On-device storage.</strong> Your recipes should live locally, not only in someone else's cloud. If the company shuts down, your recipes should still be accessible.</li>
        <li><strong>Structured ingredient lists.</strong> Each ingredient should be a separate, editable entry — not just a line in a text block.</li>
        <li><strong>Meal plan integration.</strong> Can you schedule a recipe and have it drive a shopping list? If not, you have a digital recipe box, not a planning tool.</li>
        <li><strong>No subscription required.</strong> Some recipe managers charge monthly for basic access to your own recipes. A one-time purchase or free app is a more sustainable model.</li>
        <li><strong>Simple, fast UI.</strong> If it takes more than two taps to find a recipe, you will stop using it during busy weeknight cooking.</li>
      </ol>

      <CompareTable
        colA="Notes / Bookmarks"
        colB="Nond"
        rows={[
          { feature: 'Works fully offline', a: 'Partial', b: true },
          { feature: 'Structured ingredients', a: false, b: true },
          { feature: 'Meal plan integration', a: false, b: true },
          { feature: 'Serving size scaling', a: false, b: true },
          { feature: 'Search by ingredient', a: false, b: true },
          { feature: 'Auto grocery list', a: false, b: true },
        ]}
      />

      <h2>Nond as a recipe manager</h2>
      <p>
        <Link to="/nond">Nond</Link> is built around these requirements. Recipes are stored on-device with separate fields for title, cook time, servings, and ingredients. They are searchable, offline, and connected directly to the meal planner — scheduling a recipe immediately makes its ingredients available for grocery list generation.
      </p>
      <p>
        It does not import recipes from websites automatically (a deliberate omission — pasting in a recipe takes seconds and ensures you are only saving meals you actually want to cook). It does not have nutrition data or social features. It is a recipe manager and meal planner, exactly and completely.
      </p>

      <div className="blog-callout">
        The value of a recipe manager compounds over time. The first week you save five recipes. After six months you have forty, all searchable, all connected to your planner, all ready to drive a grocery list. The investment in structured storage pays back repeatedly.
      </div>

      <div className="blog-cta">
        <p>Nond stores your recipes with full ingredient data, connects them to a two-week meal planner, and generates your grocery list automatically. Free on iPhone, no account required.</p>
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

export default NondBlogRecipeManager;
