import React from 'react';

type GridWrapperProps = {
  children: React.ReactNode;
};

const GridWrapper: React.FC<GridWrapperProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr 1fr 1fr ', // 5 columns layout
        gridTemplateRows: '1fr 1fr 1fr 1fr', // 4 rows layout
        gap: '20px',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default GridWrapper;
