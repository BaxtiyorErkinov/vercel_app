import React from 'react';

//styles
import './mainbtn.scss';

const MainBtn = ({ text }) => {
  return (
    <div className="main_btn">
      <button className="hbtn hb-fill-left-br">
        {text}
      </button>
    </div>
  );
};

export default MainBtn;
