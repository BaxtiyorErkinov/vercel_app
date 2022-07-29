import React from 'react';

import './blogboxes.scss';

const BlogBoxes = ({ title, children }) => {
  return (
    <div className="box">
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default BlogBoxes;
