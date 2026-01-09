import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Pastel.css';
import './Nond.css';
import appImg from '../assets/app.png';
import appBadge from '../assets/available-on-the-app-store.svg';

const Nond: React.FC = () => {
  useEffect(() => {
    document.title = 'Nond';
  }, []);

  return (
    <div className="nond-root">
      <div className="nond-hero">
        <div className="nond-copy">
          <h1>Stop the "What’s for dinner?" stress. Meet your new kitchen companion.</h1>
          <h2>Nond combines a beautiful digital cookbook with a powerful meal planner and a smart grocery list that actually understands your pantry. Save time, reduce food waste, and enjoy cooking again.</h2>

          <ul className="nond-features">
            <li>
              <strong>Your Digital Cookbook:</strong> Save and organize your favorite recipes in one place with clear cooking times and serving sizes so you're always prepared.
            </li>
            <li>
              <strong>Effortless Meal Planning:</strong> Schedule meals up to two weeks ahead to stay on track with your health and budget goals.
            </li>
            <li>
              <strong>Smarter Grocery Lists:</strong> Nond automatically generates a shopping list from your scheduled meals and checks it against your pantry so you only buy what you need.
            </li>
            <li>
              <strong>The "Staples" Advantage:</strong> Mark items like salt, oil, and flour as staples once and they'll be excluded from generated shopping lists.
            </li>
            <li>
              <strong>Dark Mode Ready:</strong> Gorgeous Dark and Light themes give the perfect viewing experience whether planning in morning light or cooking late at night.
            </li>
            <li>
              <strong>Swipe to Organize:</strong> Intuitive gestures let you mark staples, check off groceries, or manage lists with a simple swipe.
            </li>
          </ul>

          <p className="nond-cta">Plan. Shop. Cook. Repeat. Download Nond today and take the friction out of food.</p>
          <p className="nond-legal-link">Learn more: <Link to="/nond/legal">Legal & Disclaimer</Link></p>
        </div>

        <div className="nond-image">
          <img src={appImg} alt="Nond app preview" />
          <div className="nond-store" aria-hidden>
            <a
              className="nond-store-link"
              href="https://apps.apple.com/us/app/nond-recipe-grocery-planner/id6757132886"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Nond on the App Store (opens in a new tab)"
            >
              <img src={appBadge} alt="Available on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nond;
