import React from 'react';
import Header from '../components/Header/';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <>
      <Header />
      <div className="content" style={{ height: '200vh' }}>
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
