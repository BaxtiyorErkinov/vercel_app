import React from 'react';

import './input.scss';

const CustomeInput = ({
  placeholder,
  height,
  type,
  mb,
}) => {
  return (
    <label
      className="customeInput"
      style={{
        height: height + 'px',
        marginBottom: mb + 'px',
      }}>
      <input type={type} placeholder={placeholder || ''} />
    </label>
  );
};

export default CustomeInput;
