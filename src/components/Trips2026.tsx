import React, { useEffect } from 'react';

const Trips2026: React.FC = () => {
  const destination = `/trips-2026/index.html${window.location.search}${window.location.hash}`;

  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);

  return (
    <main>
      <p>
        Opening the <a href={destination}>Olympic Peninsula trip planner</a>…
      </p>
    </main>
  );
};

export default Trips2026;
