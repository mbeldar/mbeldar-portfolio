import React from 'react';

type GridItemWrapperProps = {
  rowStart: number;
  columnStart: number;
  columnEnd?: number; // Optional, in case you want the item to span multiple columns
  children: React.ReactNode;
};

const GridItemWrapper: React.FC<GridItemWrapperProps> = ({
  rowStart,
  columnStart,
  columnEnd,
  children,
}) => {
  return (
    <div
      style={{
        gridRowStart: rowStart,
        gridColumnStart: columnStart,
        gridColumnEnd: columnEnd ? columnEnd : columnStart + 1, // Default is one column span
      }}
    >
      {children}
    </div>
  );
};

export default GridItemWrapper;
