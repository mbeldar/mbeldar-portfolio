import React from 'react';
import '../assets/css/Pastel.css';
import './Legal.css';

const Privacy: React.FC = () => {
  return (
    <div className="legal-root">
      <div className="legal-container">
        <h1>Privacy Policy for Nond</h1>

        <p className="legal-lead">
          Nond is committed to protecting your privacy. This policy explains how we handle data when you use the Nond app and related web pages.
        </p>

        <h2>1. No Data Collection</h2>
        <p>
          Nond does not collect personal data about you. We do not track, profile, or sell user information. The app is designed so that user data remains under the user's control.
        </p>

        <h2>2. Imported Recipes</h2>
        <p>
          When you import recipes from third-party websites, the recipe content is processed on the backend to extract key fields (such as title, ingredients, and instructions). These imported recipes are not stored on our servers as persistent data.
        </p>

        <h2>3. Local Storage</h2>
        <p>
          All of your cookbook content, preferences, and app data are saved locally on your device/browser. The developer does not have access to this data unless you explicitly share it.
        </p>

        <h2>4. Developer Access</h2>
        <p>
          The developer does not have access to users' saved data. If you back up or export data yourself, that data will be under your control and subject to how you choose to store or share it.
        </p>

        <h2>5. Changes</h2>
        <p>
          We may update this privacy policy from time to time. Significant changes will be noted here.
        </p>

        <p className="legal-note">Last updated: January 6, 2026</p>
      </div>
    </div>
  );
};

export default Privacy;
