import React from 'react';
import Header from './Header/';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const PageLayout = () => {
  return (
    <>
      <Header />
      <div className="page__content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
