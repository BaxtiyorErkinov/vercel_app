import React from 'react';

import MainButton from '../mainbtn/index';

import './subscribe.scss';

const Subscribe = () => {
  return (
    <div className="subscribeus">
      <div className="text">
        <p className="title">
          DON’T MISS OUT OUR LATEST UPDATES
        </p>
        <h3 className="subtitle">SUBSCRIBE US</h3>
      </div>
      <div className="action__field">
        <div className="field">
          <input
            type="text"
            placeholder="Enter your email"
          />
          <MainButton text="SUBSCRIBE NOW" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
