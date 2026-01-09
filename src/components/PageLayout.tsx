import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/css/GlobalBackground.css';

const PageLayout: React.FC = () => {
  return (
    <div className="page-layout">
      <div className="page-content">
        <Outlet />
      </div>

      <div className="floating-blobs" aria-hidden>
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
    </div>
  );
};

export default PageLayout;
