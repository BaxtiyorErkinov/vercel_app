import React from 'react';

//components
import { Grid } from '@mui/material';

//img
import Img from '../../assets/images/watchvideo.jpg';

//icon
import { FaPlay } from 'react-icons/fa';

import './watchvideo.scss';

const WatchVideo = () => {
  return (
    <div className="watchvideo__container">
      <Grid container>
        <Grid item md={6} sm={12} xs={12}>
          <div className="banner">
            <img src={Img} alt="" />
            <div className="video__action">
              <span>
                <FaPlay />
              </span>
              <p>Watch Video</p>
            </div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className="watchvideo__desc">
            <p className="title">
              THE ONLY DESIGN YOU NEED
            </p>
            <h3 className="subtitle">
              MAKE AMAZING WEBSITES WITHOUT TOUCHING COD
            </h3>
            <p className="desc">
              Tincidunt elit magnis nulla facilisis sagittis
              maecenas. Sapien nunc amet ultrices, dolores
              sit ipsum velit purus aliquet, massa fringilla
              leo orci. Lorem ipsum dolors sit amet elit
              magnis amet ultrices purus aliquet.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WatchVideo;
