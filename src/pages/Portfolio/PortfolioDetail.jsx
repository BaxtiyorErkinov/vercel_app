import React from 'react';

//components
import Portfolio from '../../components/Portfolio';
import PagesBanner from '../../components/PagesBanner/';
import { Grid } from '@mui/material';

//fakedata
import { portfolioData } from '../../data';

import './portfoliodetail.scss';

const PortfolioDetail = () => {
  return (
    <div className="portfolio__detail">
      <PagesBanner
        page="HOME - PORTFOLIO"
        pagetitle="PORTFOLIO DETAILs"
      />
      <div className="detailed__portfolio">
        <Grid container spacing={4}>
          <Grid item md={8} sm={6} xs={12}>
            <div className="portfolio__detail__images">
              <img
                src="https://meipaly-nextjs.vercel.app/_next/static/images/7-19b8774413194049f9562fa7903e6733.jpg"
                alt=""
                className="portfolio__detail__images__item"
              />
              <img
                src="https://meipaly-nextjs.vercel.app/_next/static/images/8-e6c051b990665d27c1f86f54a5a2a903.jpg"
                alt=""
                className="portfolio__detail__images__item"
              />
            </div>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <div className="portfolio__detail__content">
              <div className="about__portfolio">
                <h3 className="title">DESIGN STYLES</h3>
                <p className="desc">
                  Tincidunt elit magnis nulla facilisis
                  sagittis sapien nunc amet ultrices dolores
                  sit ipsum velit purus aliquet massa
                  fringilla leo orci. Sapien nunc amet
                  ultrices, dolores sit ipsum velit purus
                  aliquet, massa fringilla leo orci dolors
                  sit amet elit amet.
                </p>
              </div>
              <div className="portfolio__info">
                <div className="clients">
                  <p className="title">CLIENTS</p>
                  <span className="client">
                    Jessica Brown
                  </span>
                </div>
                <div className="category">
                  <p className="title">Category</p>
                  <div className="category__list">
                    <span className="category">
                      Graphic
                    </span>
                    <span className="category">
                      ,,Illustrations,,
                    </span>
                  </div>
                </div>
                <div className="date">
                  <p className="title">DATE:</p>
                  <span className="createdDate">
                    8 Nov, 2018
                  </span>
                </div>
                <div className="follow">
                  <p className="title">FOLLOW:</p>
                  <ul className="social__links">
                    <li className="link">Facebook</li>
                    <li className="link">Facebook</li>
                    <li className="link">Facebook</li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <main className="another__portfolios">
        <div className="anotherportfolio__section__title">
          <p className="title">OUR PORTFOLIO</p>
          <h1 className="subtitle">RELATED WORK</h1>
          <p className="desc">
            We are committed to providing our customers with
            exceptional service while offering our employees
            the best training.
          </p>
        </div>
        <Portfolio data={portfolioData.slice(0, 3)} />
      </main>
    </div>
  );
};

export default PortfolioDetail;
