import React from 'react';

//styles
import './mainbtn.scss';

const MainBtn = ({ text, width, height }) => {
  return (
    <div className="main_btn">
      <button
        className="hbtn hb-fill-left-br"
        style={{ width, height }}>
        {text}
      </button>
    </div>
  );
};

export default MainBtn;
