import React from 'react';

import './input.scss';

const CustomeInput = ({ placeholder, height, type }) => {
  return (
    <label
      className="customeInput"
      style={{ height: height + 'px' }}>
      <input type={type} placeholder={placeholder || ''} />
    </label>
  );
};

export default CustomeInput;
