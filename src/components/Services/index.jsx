import React from 'react';

//icons
import Web from '../../assets/images/web.png';
import GraphicDesign from '../../assets/images/graphic.png';
import Marketing from '../../assets/images/marketing.png';
import Mobile from '../../assets/images/mobile.png';
import Seo from '../../assets/images/seo.png';

//mui
import { Grid } from '@mui/material';

//styles
import './services.scss';

//fake data
const cardData = [
  {
    id: 1,
    title: 'Website Development',
    img: Web,
  },
  {
    id: 2,
    title: 'Graphic Designing',
    img: GraphicDesign,
  },
  {
    id: 3,
    title: 'Digital Marketing',
    img: Marketing,
  },
  {
    id: 4,
    title: 'Seo & Content Writing',
    img: Seo,
  },
  {
    id: 5,
    title: 'App Development',
    img: Mobile,
  },
];

const Services = () => {
  return (
    <div className="services__container">
      <div className="services__title">
        <p className="title">SERVICES WE ARE OFFERING</p>
        <h1 className="subtitle">
          WE DESIGN DIGITAL PRODUCTS THAT HELP GROW
          BUSINESSES.
        </h1>
        <p className="desc">
          We are committed to providing our customers with
          exceptional service while offering our employees
          the best training.
        </p>
      </div>
      <div className="content">
        <Grid
          container
          spacing={4}
          justifyContent={'center'}>
          {cardData.map((item) => (
            <Grid item md={2} sm={4} xs={12} key={item.id}>
              <div className="card">
                <div className="card-side front">
                  <img src={item.img} alt="" />
                  <h3 className="card__text">
                    {item.title}
                  </h3>
                </div>
                <div className="card-side back">
                  <img src={item.img} alt="" />
                  <h3 className="card__text">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;
