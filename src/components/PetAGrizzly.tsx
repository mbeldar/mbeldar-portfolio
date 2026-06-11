import React, { useState } from 'react';
import '../assets/css/PetAGrizzly.css';

const PetAGrizzly: React.FC = () => {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <main className="grizzly-page">
      <div className="grizzly-backdrop" aria-hidden="true">
        <div className="grizzly-silhouette" />
        <div className="paw paw-one" />
        <div className="paw paw-two" />
        <div className="paw paw-three" />
      </div>

      <section className="grizzly-hero">
        <p className="grizzly-kicker">Wildlife advice from the Department of Absolutely Not</p>
        <h1 className="grizzly-title">Pet A Grizzly</h1>
        <p className="grizzly-subtitle">
          A premium life choice for people who think warning labels are just spicy suggestions.
        </p>

        <button
          type="button"
          className="grizzly-cta"
          onClick={() => setShowSteps(true)}
        >
          Click here to find steps
        </button>
      </section>

      {showSteps && (
        <section id="grizzly-steps" className="grizzly-panel">
          <span className="grizzly-chip">Official Procedure</span>
          <h2 className="grizzly-warning">
            You food dont try that.
            <br />
            What&apos;s wrong with you?
          </h2>
          <p className="grizzly-copy">
            Step 1: Admire the majestic grizzly from a distance.
          </p>
          <p className="grizzly-copy">
            Step 2: Continue admiring it from that distance because distance is doing incredible work here.
          </p>
          <p className="grizzly-copy">
            Step 3: Go pet a golden retriever, a throw pillow, or literally any other object with better manners.
          </p>
        </section>
      )}
    </main>
  );
};

export default PetAGrizzly;
