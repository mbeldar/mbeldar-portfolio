import React from 'react';
import '../assets/css/Pastel.css';
import './Nond.css';
import appImg from '../assets/app.png';

const Nond: React.FC = () => {
  return (
    <div className="nond-root">
      <div className="nond-hero">
        <div className="nond-copy">
          <h1>Stop Wondering What's for Dinner. Start Cooking.</h1>
          <h2>Nond is your new smart kitchen assistant. Effortlessly import recipes from any website, generate new ideas from scratch, and let us build your grocery list for you. Meal planning has never been this easy.</h2>

          <ul className="nond-features">
            <li>
              <strong>The Ultimate Recipe Inbox:</strong> Save recipes from famous websites with a single tap. Nond's smart scraper automatically imports the title, ingredients, and instructions, building your personal cookbook in seconds.
            </li>
            <li>
              <strong>Create with AI:</strong> Don't know what to cook? Just ask. Describe what you're in the mood for (e.g., "a quick vegan pasta dish" or "a healthy chicken and rice meal"), and our AI chef will generate a unique recipe just for you.
            </li>
            <li>
              <strong>Smart Meal Planner:</strong> Plan your week by simply selecting and dropping recipes onto your calendar. Say goodbye to spreadsheet planning and sticky notes.
            </li>
            <li>
              <strong>Automatic Grocery Lists:</strong> Once your week is planned, Nond instantly checks your virtual pantry and generates a categorized grocery list with only the items you need. Shopping is now a breeze.
            </li>
          </ul>

          <p className="nond-cta">Download Nond on the App Store today and revolutionize your kitchen!</p>
        </div>

        <div className="nond-image">
          <img src={appImg} alt="Nond app preview" />
        </div>
      </div>
    </div>
  );
};

export default Nond;
