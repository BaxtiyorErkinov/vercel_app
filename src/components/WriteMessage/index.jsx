import { Grid } from '@mui/material';
import React from 'react';
import CustomeInput from '../CustomeInput';
import Button from '../mainbtn';

import './writemess.scss';

const WriteMessage = () => {
  return (
    <div className="write__message">
      <div className="writemess__section__title">
        <p className="title">CONTACT WITH US</p>
        <h1 className="subtitle">WRITE US A MESSAGE</h1>
        <p className="desc">
          We are committed to providing our customers with
          exceptional service while offering our employees
          the best training.
        </p>
      </div>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid item md={6} sm={6} xs={12}>
          <CustomeInput
            placeholder="Firts Name"
            height={70}
            type="text"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomeInput
            placeholder="Last Name"
            height={70}
            type="text"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomeInput
            placeholder="Email Address"
            height={70}
            type="email"
          />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomeInput
            placeholder="Phone Number"
            height={70}
            type="number"
          />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <CustomeInput
            placeholder="Write Message"
            height={140}
            type="text"
          />
        </Grid>
      </Grid>
      <Button text="send message" />
    </div>
  );
};

export default WriteMessage;
