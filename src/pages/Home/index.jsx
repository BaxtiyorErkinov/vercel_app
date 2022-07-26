import React from 'react';

//components
import HeroSlider from '../../components/HeroSlider/';
import Services from '../../components/Services/';
import AboutAgency from '../../components/AboutAgency/';
import Portfolio from '../../components/Portfolio/';
import Clients from '../../components/Clients/';
import ClientsSlider from '../../components/ClientsSlider/';
import Blog from '../../components/Blog/';

//fake data
import { portfolioData, blogData } from '../../data'

//styles
import './home.scss';


const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <Services />
      <AboutAgency />
      <main className="portfolio__section">
        <div className="portfolio__section__title">
          <p className="title">OUR PORTFOLIO</p>
          <h1 className="subtitle">WORK SHOWCASE</h1>
          <p className="desc">
            We are committed to providing our customers with
            exceptional service while offering our employees
            the best training.
          </p>
        </div>
        <Portfolio data={portfolioData} />
      </main>
      <Clients />
      <ClientsSlider />
      <main className="blog__section">
        <div className="blog__section__title">
          <p className="title">OUR NEWS & ARTICLES</p>
          <h1 className="subtitle">LATEST BLOG POSTS</h1>
          <p className="desc">
            We are committed to providing our customers with
            exceptional service while offering our employees
            the best training.
          </p>
        </div>
        <Blog data={blogData} />
      </main>
    </div>
  );
};

export default Home;
