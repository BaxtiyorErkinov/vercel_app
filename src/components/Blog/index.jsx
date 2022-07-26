import React from 'react';
import { Grid } from '@mui/material';

import './blog.scss';

const Blog = ({ data }) => {
  return (
    <div className="blog__container">
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <div className="blog__item">
              <div className="blog__item__image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <div className="date">{item.date}</div>
                <h3 className="title">{item.title}</h3>
                <span className="learnmore">
                  LEARN MORE
                </span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
