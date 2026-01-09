import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/css/GlobalBackground.css';
import FloatingBlobs from './FloatingBlobs';

const PageLayout: React.FC = () => {
  return (
    <div className="page-layout">
      <div className="page-content">
        <Outlet />
      </div>

      <FloatingBlobs />
    </div>
  );
};

export default PageLayout;
