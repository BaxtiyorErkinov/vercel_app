import React from 'react';

//components
import Button from '../mainbtn/';
import { Grid } from '@mui/material';

//styles
import './aboutAgency.scss';

const AboutAgency = () => {
  return (
    <div className="about_ag_wrapper">
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <div className="about_ag_wrapper__content">
            <p className="title">
              WELCOM TO SMART MEIPALY WEB AGENCY
            </p>
            <h3 className="subtitle">
              WE ARE THE BEST WEBSITE AGENCY IN THE WORLD
            </h3>
            <p className="desc">
              We are committed to providing our customers
              with exceptional service while offering our
              employees the best training. Lorem Ipsum is
              simply dummy text of the printing and
              typesetting industry has been the industry's
              standard dummy text ever since the 1500s.
            </p>
            <Button text="LEARN MORE" />
          </div>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <div className="images">
            <div className="img1">
              <img
                src="https://meipaly-nextjs.vercel.app/_next/static/images/2-eb8cee69fb33573ea0b9999d5fb8af45.jpg"
                alt=""
              />
            </div>
            <div className="img2">
              <img
                src="https://meipaly-nextjs.vercel.app/_next/static/images/1-0b756590c7067bda20feabda1c077659.jpg"
                alt=""
              />
            </div>
            <div className="border"></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutAgency;
