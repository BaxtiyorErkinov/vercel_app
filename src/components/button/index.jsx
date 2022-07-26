import React from 'react';

import './button.css';

const Button = ({ text }) => {
  return (
    <button className="hbtn hb-fill-left-br">{text}</button>
  );
};

export default Button;
