import React from 'react';
import '../assets/css/Pastel.css';
import './Nond.css';

const Support: React.FC = () => {
  return (
    <div className="nond-root">
      <div className="nond-hero">
        <div className="nond-copy">
          <h1>Need help with Nond?</h1>

          <h2>How to use Nond — Quick FAQ</h2>
          <ul className="nond-features">
            <li>
              <strong>Save recipes:</strong> Use the importer or add recipes manually to build your digital cookbook.
            </li>
            <li>
              <strong>Plan meals:</strong> Use planner screen to add recipes you imported or saved for any day in the next two weeks.
            </li>
            <li>
              <strong>Generate grocery lists:</strong> After planning, You can generate a shopping list from your scheduled meals.
            </li>
            <li>
              <strong>Set staples:</strong> Mark frequently stocked items (salt, oil, flour) as staples by swiping right on the item.
            </li>
            <li>
              <strong>Dark mode & gestures:</strong> Toggle Dark/Light themes in settings.
            </li>
          </ul>

          <h2>Support</h2>
          <p>
            For help, questions, or to report an issue, email us at <a href="mailto:beldarmayur@gmail.com">beldarmayur@gmail.com</a>.
          </p>
          <p>
            Please include a brief description of the issue, steps to reproduce, and screenshots if available. We'll respond as soon as we can.
          </p>

          <p className="nond-legal-link">Back: <a href="/nond">Nond Home</a> • <a href="/nond/legal">Legal</a></p>
        </div>
      </div>
    </div>
  );
};

export default Support;
