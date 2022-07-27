import React from 'react';

//images
import Img1 from '../../assets/images/about1.jpg';
import Img2 from '../../assets/images/about2.jpg';

//components
import PagesBanner from '../../components/PagesBanner';
import AboutAgency from '../../components/AboutAgency';

import './about.scss';
import Subscribe from '../../components/Subscibe';

const About = () => {
  return (
    <div className="aboutPage_wrapper">
      <PagesBanner
        page="HOME - About"
        pagetitle="About US"
      />
      <AboutAgency />
      <Subscribe />
    </div>
  );
};

export default About;
